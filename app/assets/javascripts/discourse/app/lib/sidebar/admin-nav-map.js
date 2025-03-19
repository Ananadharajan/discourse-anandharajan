export const ADMIN_NAV_MAP = [
  {
    text: "",
    name: "root",
    hideSectionHeader: true,
    links: [
      {
        name: "admin_home",
        route: "admin.dashboard.general",
        label: "admin.config.dashboard.title",
        description: "admin.config.dashboard.header_description",
        icon: "house",
        moderator: true,
      },
      {
        name: "admin_users",
        route: "adminUsers",
        label: "admin.config.users.title",
        description: "admin.config.users.header_description",
        icon: "users",
        moderator: true,
      },
      {
        name: "admin_search",
        route: "adminSearch",
        label: "admin.config.search_everything.title",
        description: "admin.config.search_everything.header_description",
        icon: "magnifying-glass",
        moderator: true,
      },
      {
        name: "admin_groups",
        route: "groups",
        label: "admin.config.groups.title",
        description: "admin.config.groups.header_description",
        icon: "user-group",
        moderator: true,
      },
      {
        name: "admin_all_site_settings",
        route: "adminSiteSettings",
        label: "admin.config.site_settings.title",
        description: "admin.config.site_settings.header_description",
        icon: "gear",
      },
      {
        name: "admin_whats_new",
        route: "admin.whatsNew",
        label: "admin.config.whats_new.title",
        description: "admin.config.whats_new.header_description",
        icon: "gift",
        keywords: "admin.config.whats_new.keywords",
        moderator: true,
      },
    ],
  },
  {
    name: "account",
    label: "admin.config_sections.account.title",
    links: [
      {
        name: "admin_backups",
        route: "admin.backups",
        label: "admin.config.backups.title",
        description: "admin.config.backups.header_description",
        icon: "box-archive",
        settings_category: "backups",
        multi_tabbed: true,
        links: [
          {
            name: "admin_backups_logs",
            route: "admin.backups.logs",
            label: "admin.config.backups.sub_pages.logs.title",
            description:
              "admin.config.backups.sub_pages.logs.header_description",
          },
        ],
      },
    ],
  },
  {
    name: "reports",
    label: "admin.config_sections.reports.title",
    links: [
      {
        name: "admin_all_reports",
        route: "adminReports.index",
        label: "admin.config.reports.title",
        description: "admin.config.reports.header_description",
        icon: "chart-bar",
        moderator: true,
      },
    ],
  },
  {
    name: "community",
    label: "admin.config_sections.community.title",
    links: [
      {
        name: "admin_about_your_site",
        route: "adminConfig.about",
        label: "admin.config.about.title",
        description: "admin.config.about.header_description",
        icon: "gear",
        settings_area: "about",
      },
      {
        name: "admin_badges",
        route: "adminBadges",
        label: "admin.config.badges.title",
        description: "admin.config.badges.header_description",
        icon: "certificate",
      },
      {
        name: "admin_login_and_authentication",
        route: "adminConfig.loginAndAuthentication.settings",
        label: "admin.config.login_and_authentication.title",
        description: "admin.config.login_and_authentication.header_description",
        icon: "unlock",
        settings_category: "login",
      },
      {
        name: "admin_notifications",
        route: "adminConfig.notifications.settings",
        label: "admin.config.notifications.title",
        description: "admin.config.notifications.header_description",
        icon: "bell",
        settings_area: "notifications",
      },
      {
        name: "admin_localization",
        route: "adminConfig.localization.settings",
        label: "admin.config.localization.title",
        description: "admin.config.localization.header_description",
        keywords: "admin.config.localization.keywords",
        icon: "globe",
        settings_area: "localization",
      },
      {
        name: "admin_permalinks",
        route: "adminPermalinks",
        label: "admin.config.permalinks.title",
        description: "admin.config.permalinks.header_description",
        icon: "link",
        settings_area: "permalinks",
        multi_tabbed: true,
      },
      {
        name: "admin_trust_levels",
        route: "adminConfig.trustLevels.settings",
        label: "admin.config.trust_levels.title",
        description: "admin.config.trust_levels.header_description",
        icon: "user-shield",
        settings_area: "trust_levels",
      },
      {
        name: "admin_group_permissions",
        route: "adminConfig.groupPermissions.settings",
        label: "admin.config.group_permissions.title",
        description: "admin.config.group_permissions.header_description",
        icon: "user-gear",
        settings_area: "group_permissions",
      },
      {
        name: "admin_user_fields",
        route: "adminUserFields",
        label: "admin.config.user_fields.title",
        description: "admin.config.user_fields.header_description",
        icon: "user-pen",
      },
      {
        name: "admin_watched_words",
        route: "adminWatchedWords",
        label: "admin.config.watched_words.title",
        description: "admin.config.watched_words.header_description",
        icon: "eye",
        moderator: true,
      },
      {
        name: "admin_legal",
        route: "adminConfig.legal.settings",
        label: "admin.config.legal.title",
        description: "admin.config.legal.header_description",
        icon: "gavel",
      },
      {
        name: "admin_moderation_flags",
        route: "adminConfig.flags",
        label: "admin.config.flags.title",
        description: "admin.config.flags.header_description",
        keywords: "admin.config.flags.keywords",
        icon: "flag",
        settings_area: "flags",
        multi_tabbed: true,
      },
    ],
  },
  {
    name: "appearance",
    label: "admin.config_sections.appearance.title",
    links: [
      {
        name: "admin_font_style",
        route: "adminConfig.fonts.settings",
        label: "admin.config.font_style.title",
        description: "admin.config.font_style.header_description",
        icon: "italic",
        settings_area: "fonts",
      },
      {
        name: "admin_site_logo",
        route: "adminConfig.logo.settings",
        label: "admin.config.logo.title",
        description: "admin.config.logo.header_description",
        icon: "fab-discourse",
        settings_category: "branding",
      },
      {
        name: "admin_color_palettes",
        route: "adminCustomize.colors",
        label: "admin.config.color_palettes.title",
        description: "admin.config.color_palettes.header_description",
        icon: "palette",
      },
      {
        name: "admin_emoji",
        route: "adminEmojis",
        label: "admin.config.emoji.title",
        description: "admin.config.emoji.header_description",
        icon: "discourse-emojis",
        settings_area: "emojis",
        multi_tabbed: true,
      },
      {
        name: "admin_navigation",
        route: "adminConfig.navigation.settings",
        label: "admin.config.navigation.title",
        description: "admin.config.navigation.header_description",
        icon: "diagram-project",
        settings_area: "navigation",
      },
      {
        name: "admin_themes_and_components",
        route: "adminConfig.customize.themes",
        currentWhen:
          "adminConfig.customize.themes adminConfig.customize.components",
        label: "admin.config.themes_and_components.title",
        description: "admin.config.themes_and_components.header_description",
        icon: "paintbrush",
        keywords: "admin.config.themes_and_components.keywords",
      },
      {
        name: "admin_customize_site_texts",
        route: "adminSiteText",
        label: "admin.config.site_texts.title",
        description: "admin.config.site_texts.header_description",
        icon: "language",
      },
    ],
  },
  {
    name: "email_settings",
    label: "admin.config_sections.email.title",
    links: [
      {
        name: "admin_server_setup",
        route: "adminEmail",
        label: "admin.config.email.title",
        description: "admin.config.email.header_description",
        keywords: "admin.config.email.keywords",
        icon: "gear",
        links: [
          {
            name: "admin_email_preview_summary",
            route: "adminEmail.previewDigest",
            label: "admin.config.email.sub_pages.preview_summary.title",
            description:
              "admin.config.email.sub_pages.preview_summary.header_description",
          },
          {
            name: "admin_email_advanced_test",
            route: "adminEmail.advancedTest",
            label: "admin.config.email.sub_pages.advanced_test.title",
            description:
              "admin.config.email.sub_pages.advanced_test.header_description",
          },
          {
            name: "admin_email_templates",
            route: "adminEmailTemplates",
            label: "admin.config.email.sub_pages.templates.title",
            description:
              "admin.config.email.sub_pages.templates.header_description",
          },
          {
            name: "admin_email_sent",
            route: "adminEmail.sent",
            label: "admin.config.email.sub_pages.sent.title",
            description: "admin.config.email.sub_pages.sent.header_description",
          },
          {
            name: "admin_email_skipped",
            route: "adminEmail.skipped",
            label: "admin.config.email.sub_pages.skipped.title",
            description:
              "admin.config.email.sub_pages.skipped.header_description",
          },
          {
            name: "admin_email_bounced",
            route: "adminEmail.bounced",
            label: "admin.config.email.sub_pages.bounced.title",
            description:
              "admin.config.email.sub_pages.bounced.header_description",
          },
          {
            name: "admin_email_received",
            route: "adminEmail.received",
            label: "admin.config.email.sub_pages.received.title",
            description:
              "admin.config.email.sub_pages.received.header_description",
          },
          {
            name: "admin_email_rejected",
            route: "adminEmail.rejected",
            label: "admin.config.email.sub_pages.rejected.title",
            description:
              "admin.config.email.sub_pages.rejected.header_description",
          },
        ],
      },
      {
        name: "admin_appearance",
        route: "adminCustomizeEmailStyle",
        label: "admin.config.email_appearance.title",
        description: "admin.config.email_appearance.header_description",
        icon: "envelope",
      },
    ],
  },
  {
    name: "security",
    label: "admin.config_sections.security.title",
    links: [
      {
        name: "admin_security",
        route: "adminConfig.security.settings",
        label: "admin.config.security.title",
        description: "admin.config.security.header_description",
        icon: "lock",
        settings_category: "security",
      },
      {
        name: "admin_spam",
        route: "adminConfig.spam.settings",
        label: "admin.config.spam.title",
        description: "admin.config.spam.header_description",
        icon: "robot",
        settings_category: "spam",
      },
      {
        name: "admin_logs_staff_action_logs",
        route: "adminLogs",
        label: "admin.config.staff_action_logs.title",
        description: "admin.config.staff_action_logs.header_description",
        keywords: "admin.config.staff_action_logs.keywords",
        icon: "user-shield",
        moderator: true,
        links: [
          {
            name: "admin_logs_screened_emails",
            route: "adminLogs.screenedEmails",
            label:
              "admin.config.staff_action_logs.sub_pages.screened_emails.title",
            description:
              "admin.config.staff_action_logs.sub_pages.screened_emails.header_description",
          },
          {
            name: "admin_logs_screened_ip_addresses",
            route: "adminLogs.screenedIpAddresses",
            label:
              "admin.config.staff_action_logs.sub_pages.screened_ips.title",
            description:
              "admin.config.staff_action_logs.sub_pages.screened_ips.header_description",
          },
          {
            name: "admin_logs_screened_urls",
            route: "adminLogs.screenedUrls",
            label:
              "admin.config.staff_action_logs.sub_pages.screened_urls.title",
            description:
              "admin.config.staff_action_logs.sub_pages.screened_urls.header_description",
          },
          {
            name: "admin_logs_search_logs",
            route: "adminSearchLogs",
            label: "admin.config.staff_action_logs.sub_pages.search_logs.title",
            description:
              "admin.config.staff_action_logs.sub_pages.search_logs.header_description",
          },
        ],
      },
    ],
  },
  {
    name: "plugins",
    label: "admin.config_sections.plugins.title",
    links: [
      {
        name: "admin_installed_plugins",
        route: "adminPlugins.index",
        label: "admin.config.plugins.title",
        description: "admin.config.plugins.header_description",
        icon: "puzzle-piece",
      },
    ],
  },
  {
    name: "advanced",
    label: "admin.config_sections.advanced.title",
    links: [
      {
        name: "admin_api_keys",
        route: "adminApiKeys",
        icon: "key",
        label: "admin.config.api_keys.title",
        description: "admin.config.api_keys.header_description",
        keywords: "admin.config.api_keys.keywords",
      },
      {
        name: "admin_webhooks",
        route: "adminWebHooks",
        icon: "arrows-rotate",
        label: "admin.config.webhooks.title",
        description: "admin.config.webhooks.header_description",
        keywords: "admin.config.webhooks.keywords",
      },
      {
        name: "admin_developer",
        route: "adminConfig.developer.settings",
        label: "admin.config.developer.title",
        description: "admin.config.developer.header_description",
        icon: "keyboard",
        settings_category: "developer",
      },
      {
        name: "admin_embedding",
        route: "adminEmbedding",
        label: "admin.config.embedding.title",
        description: "admin.config.embedding.header_description",
        icon: "code",
        settings_area: "embedding",
      },
      {
        name: "admin_rate_limits",
        route: "adminConfig.rate-limits.settings",
        label: "admin.config.rate_limits.title",
        description: "admin.config.rate_limits.header_description",
        icon: "rocket",
        settings_category: "rate_limits",
      },
      {
        name: "admin_user_api",
        route: "adminConfig.user-api.settings",
        label: "admin.config.user_api.title",
        description: "admin.config.user_api.header_description",
        icon: "shuffle",
        settings_category: "user_api",
      },
      {
        name: "admin_onebox",
        route: "adminConfig.onebox.settings",
        label: "admin.config.onebox.title",
        description: "admin.config.onebox.header_description",
        icon: "far-square",
        settings_category: "onebox",
      },
      {
        name: "admin_files",
        route: "adminConfig.files.settings",
        label: "admin.config.files.title",
        description: "admin.config.files.header_description",
        icon: "file",
        settings_category: "files",
      },
      {
        name: "admin_other_options",
        route: "adminConfig.other.settings",
        label: "admin.config.other.title",
        description: "admin.config.other.header_description",
        icon: "discourse-other-tab",

        settings_category: "uncategorized",
      },
      {
        name: "admin_search",
        route: "adminConfig.search.settings",
        label: "admin.config.search.title",
        description: "admin.config.search.header_description",
        icon: "magnifying-glass",
        settings_category: "search",
      },
      {
        name: "admin_experimental",
        route: "adminConfig.experimental.settings",
        label: "admin.config.experimental.title",
        description: "admin.config.experimental.header_description",
        icon: "discourse-sparkles",
        settings_category: "experimental",
      },
    ],
  },
];
