import { array } from "@ember/helper";
import { fillIn, render } from "@ember/test-helpers";
import { module, test } from "qunit";
import { setupRenderingTest } from "discourse/tests/helpers/component-test";
import { queryAll } from "discourse/tests/helpers/qunit-helpers";
import selectKit from "discourse/tests/helpers/select-kit-helper";
import { i18n } from "discourse-i18n";
import ThemesList from "admin/components/themes-list";
import Theme, { COMPONENTS, THEMES } from "admin/models/theme";

function createThemes(itemsCount, customAttributesCallback) {
  return [...Array(itemsCount)].map((_, i) => {
    const attrs = { name: `Theme ${i + 1}` };
    if (customAttributesCallback) {
      Object.assign(attrs, customAttributesCallback(i + 1));
    }
    return Theme.create(attrs);
  });
}

module("Integration | Component | themes-list", function (hooks) {
  setupRenderingTest(hooks);

  test("current tab is themes", async function (assert) {
    const self = this;

    this.themes = createThemes(5);
    this.components = createThemes(5, (n) => {
      return {
        name: `Child ${n}`,
        component: true,
        parentThemes: [this.themes[n - 1]],
        parent_themes: [1, 2, 3, 4, 5],
      };
    });
    this.setProperties({
      themes: this.themes,
      components: this.components,
      currentTab: THEMES,
    });

    await render(
      <template>
        <ThemesList
          @themes={{self.themes}}
          @components={{self.components}}
          @currentTab={{self.currentTab}}
        />
      </template>
    );

    assert.dom(".themes-tab").hasClass("active", "themes tab is active");
    assert
      .dom(".components-tab")
      .doesNotHaveClass("active", "components tab is not active");

    assert
      .dom(".inactive-indicator")
      .doesNotExist(
        "there is no inactive themes separator when all themes are inactive"
      );
    assert
      .dom(".themes-list-container__item .info")
      .exists({ count: 5 }, "displays all themes");

    [2, 3].forEach((num) => this.themes[num].set("user_selectable", true));
    this.themes[4].set("default", true);
    this.set("themes", this.themes);
    const names = [4, 2, 3, 0, 1].map((num) => this.themes[num].get("name")); // default theme always on top, followed by user-selectable ones and then the rest
    assert.deepEqual(
      [...queryAll(".themes-list-container__item .info .name")].map((node) =>
        node.innerText.trim()
      ),
      names,
      "sorts themes correctly"
    );
    assert.strictEqual(
      queryAll(".inactive-indicator").index(),
      3,
      "the separator is in the right location"
    );

    this.themes.forEach((theme) => theme.set("user_selectable", true));
    this.set("themes", this.themes);
    assert
      .dom(".inactive-indicator")
      .doesNotExist(
        "there is no inactive themes separator when all themes are user-selectable"
      );

    this.set("themes", []);
    assert
      .dom(".themes-list-container__item .empty")
      .exists(
        { count: 1 },
        "shows one entry with a message when there is nothing to display"
      );
    assert
      .dom(".themes-list-container__item span.empty")
      .hasText(
        i18n("admin.customize.theme.empty"),
        "displays the right message"
      );
  });

  test("current tab is components", async function (assert) {
    const self = this;

    this.themes = createThemes(5);
    this.components = createThemes(5, (n) => {
      return {
        name: `Child ${n}`,
        component: true,
        parentThemes: [this.themes[n - 1]],
        parent_themes: [1, 2, 3, 4, 5],
      };
    });
    this.setProperties({
      themes: this.themes,
      components: this.components,
      currentTab: COMPONENTS,
    });

    await render(
      <template>
        <ThemesList
          @themes={{self.themes}}
          @components={{self.components}}
          @currentTab={{self.currentTab}}
        />
      </template>
    );

    assert
      .dom(".components-tab")
      .hasClass("active", "components tab is active");
    assert
      .dom(".themes-tab")
      .doesNotHaveClass("active", "themes tab is not active");

    assert.dom(".inactive-indicator").doesNotExist("there is no separator");
    assert
      .dom(".themes-list-container__item .info")
      .exists({ count: 5 }, "displays all components");

    this.set("components", []);
    assert
      .dom(".themes-list-container__item .empty")
      .exists(
        { count: 1 },
        "shows one entry with a message when there is nothing to display"
      );
    assert
      .dom(".themes-list-container__item span.empty")
      .hasText(
        i18n("admin.customize.theme.empty"),
        "displays the right message"
      );
  });

  test("themes search is not visible when there are less than 10 themes", async function (assert) {
    const self = this;

    const themes = createThemes(9);
    this.setProperties({
      themes,
      currentTab: THEMES,
    });

    await render(
      <template>
        <ThemesList
          @themes={{self.themes}}
          @components={{(array)}}
          @currentTab={{self.currentTab}}
        />
      </template>
    );

    assert
      .dom(".themes-list-search")
      .doesNotExist("search input not shown when we have fewer than 10 themes");
  });

  test("themes search keeps themes whose names include the search term", async function (assert) {
    const self = this;

    const themes = ["osama", "OsAmaa", "osAMA 1234"]
      .map((name) => Theme.create({ name: `Theme ${name}` }))
      .concat(createThemes(7));
    this.setProperties({
      themes,
      currentTab: THEMES,
    });

    await render(
      <template>
        <ThemesList
          @themes={{self.themes}}
          @components={{(array)}}
          @currentTab={{self.currentTab}}
        />
      </template>
    );

    assert.dom(".themes-list-search__input").exists();
    await fillIn(".themes-list-search__input", "  oSAma ");
    assert.deepEqual(
      [...queryAll(".themes-list-container__item .info .name")].map((node) =>
        node.textContent.trim()
      ),
      ["Theme osama", "Theme OsAmaa", "Theme osAMA 1234"],
      "only themes whose names include the search term are shown"
    );
  });

  test("themes filter", async function (assert) {
    const self = this;

    const themes = [
      Theme.create({ name: "Theme enabled 1", user_selectable: true }),
      Theme.create({ name: "Theme enabled 2", user_selectable: true }),
      Theme.create({ name: "Theme disabled 1", user_selectable: false }),
      Theme.create({
        name: "Theme disabled 2",
        user_selectable: false,
        remote_theme: {
          id: 42,
          remote_url:
            "git@github.com:discourse-org/discourse-incomplete-theme.git",
          commits_behind: 1,
        },
      }),
    ];

    // This is to make the filter show, it only shows if there are 10+ themes or components.
    const otherThemes = createThemes(8, (n) => {
      return {
        name: `OtherTheme ${n}${n}`,
        component: true,
        parent_themes: [1],
        enabled: true,
      };
    });

    this.setProperties({
      themes: themes.concat(otherThemes),
      currentTab: THEMES,
    });

    function themeNames() {
      return [...queryAll(".themes-list-container__item .info .name")]
        .map((node) => node.textContent.trim())
        .filter((name) => !name.includes("OtherTheme"));
    }

    await render(
      <template>
        <ThemesList
          @themes={{self.themes}}
          @components={{(array)}}
          @currentTab={{self.currentTab}}
        />
      </template>
    );

    assert.dom(".themes-list-filter__input").exists();
    assert.deepEqual(themeNames(), [
      "Theme enabled 1",
      "Theme enabled 2",
      "Theme disabled 1",
      "Theme disabled 2",
    ]);

    await selectKit(".themes-list-filter__input").expand();
    await selectKit(".themes-list-filter__input").selectRowByValue("active");
    assert.deepEqual(
      themeNames(),

      ["Theme enabled 1", "Theme enabled 2"]
    );

    await selectKit(".themes-list-filter__input").expand();
    await selectKit(".themes-list-filter__input").selectRowByValue("inactive");
    assert.deepEqual(themeNames(), ["Theme disabled 1", "Theme disabled 2"]);

    await selectKit(".themes-list-filter__input").expand();
    await selectKit(".themes-list-filter__input").selectRowByValue(
      "updates_available"
    );
    assert.deepEqual(themeNames(), ["Theme disabled 2"]);
  });

  test("components filter", async function (assert) {
    const self = this;

    const components = [
      Theme.create({
        name: "Component used 1",
        component: true,
        user_selectable: true,
        parent_themes: [1],
        enabled: true,
      }),
      Theme.create({
        name: "Component used 2",
        component: true,
        user_selectable: true,
        parent_themes: [1],
        enabled: true,
      }),
      Theme.create({
        name: "Component unused 1",
        component: true,
        user_selectable: false,
        parent_themes: [],
        enabled: true,
      }),
      Theme.create({
        name: "Component unused and disabled 1",
        component: true,
        user_selectable: false,
        parent_themes: [],
        enabled: false,
        remote_theme: {
          id: 42,
          remote_url:
            "git@github.com:discourse-org/discourse-incomplete-theme.git",
          commits_behind: 1,
        },
      }),
    ];

    // This is to make the filter show, it only shows if there are 10+ themes or components.
    const otherComponents = createThemes(8, (n) => {
      return {
        name: `OtherComponent ${n}${n}`,
        component: true,
        parent_themes: [1],
        enabled: true,
      };
    });

    this.setProperties({
      components: components.concat(otherComponents),
      currentTab: COMPONENTS,
    });

    await render(
      <template>
        <ThemesList
          @themes={{(array)}}
          @components={{self.components}}
          @currentTab={{self.currentTab}}
        />
      </template>
    );

    function componentNames() {
      return [...queryAll(".themes-list-container__item .info .name")]
        .map((node) => node.textContent.trim())
        .filter((name) => !name.includes("OtherComponent"));
    }

    assert.dom(".themes-list-filter__input").exists();
    assert.deepEqual(componentNames(), [
      "Component used 1",
      "Component used 2",
      "Component unused 1",
      "Component unused and disabled 1",
    ]);

    await selectKit(".themes-list-filter__input").expand();
    await selectKit(".themes-list-filter__input").selectRowByValue("active");
    assert.deepEqual(componentNames(), [
      "Component used 1",
      "Component used 2",
    ]);

    await selectKit(".themes-list-filter__input").expand();
    await selectKit(".themes-list-filter__input").selectRowByValue("inactive");
    assert.deepEqual(componentNames(), [
      "Component unused 1",
      "Component unused and disabled 1",
    ]);

    await selectKit(".themes-list-filter__input").expand();
    await selectKit(".themes-list-filter__input").selectRowByValue("enabled");
    assert.deepEqual(componentNames(), [
      "Component used 1",
      "Component used 2",
      "Component unused 1",
    ]);

    await selectKit(".themes-list-filter__input").expand();
    await selectKit(".themes-list-filter__input").selectRowByValue("disabled");
    assert.deepEqual(componentNames(), ["Component unused and disabled 1"]);

    await selectKit(".themes-list-filter__input").expand();
    await selectKit(".themes-list-filter__input").selectRowByValue(
      "updates_available"
    );
    assert.deepEqual(componentNames(), ["Component unused and disabled 1"]);
  });
});
