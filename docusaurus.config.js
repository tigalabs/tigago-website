const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Tigago Framework',
  tagline: 'A modular framework based on Go language',
  url: 'https://tigago.tigateam.org',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'tigateam', // Usually your GitHub org/user name.
  projectName: 'tigago-website', // Usually your repo name.
  // i18n
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh-Hans'],
    localeConfigs: {
      en: {
        label: 'English',
        direction: 'ltr',
      },
      "zh-Hans": {
        label: '简体中文',
        direction: 'ltr',
      },
    },
  },
  themeConfig: {
    announcementBar: {
      id: 'support_us',
      content: 'If you like Tigago, <a href="https://github.com/tigateam/tigago" target="_blank">give us a star on GitHub</a>!⭐️',
      backgroundColor: 'rgb(249, 122, 122)',
      textColor: '#ffffff',
      isCloseable: true,
    },
    navbar: {
      title: 'Tigago',
      logo: {
        alt: 'Tigago Site Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'docsVersionDropdown', //version
          position: 'left',
          dropdownActiveClassDisabled: true,
          dropdownItemsAfter: [
            // { to: '/versions', label: 'All versions', }, //Can add custom pages
          ],
        },
        {
          type: 'doc',
          docId: 'about',
          position: 'right',
          label: 'Docs',
        },
        {
          to: 'https://github.com/tigateam/tigago/issues?q=is%3Aopen+is%3Aissue+label%3A%22help+wanted+%7C+%E9%9C%80%E8%A6%81%E5%B8%AE%E5%8A%A9%22',
          label: 'HelpWanted',
          position: 'right',
        },
        {
          type: 'dropdown',
          label: 'Community',
          position: 'right',
          items: [
            {
              label: 'Github Discussions',
              href: 'https://github.com/tigateam/tigago/discussions',
            },
            {
              label: 'Slack',
              href: 'https://tigateams.slack.com/archives/C020D7YSJBZ',
            },
            {
              label: 'Gitter',
              href: 'https://gitter.im/tigateam/tigago',
            },
          ],
        },
        { to: '/blog', label: 'Blog', position: 'right' },
        {
          type: 'localeDropdown',
          position: 'right',
          dropdownItemsAfter: [
            { to: 'https://github.com/tigateam/tigago-website/issues/4', label: 'Help Translate 💖', }, //Can add custom pages
          ],
        },
        {
          href: 'https://github.com/tigateam/tigago',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Team Project',
          items: [
            {
              label: 'Tiga CLI',
              to: 'https://github.com/tigateam/tiga-cli',
            },
            {
              label: 'Tigago',
              to: 'https://github.com/tigateam/tigago',
            },
            {
              label: 'Tigaui',
              to: 'https://github.com/tigateam/tigaui',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Github Discussions',
              href: 'https://github.com/tigateam/tigago/discussions',
            },
            {
              label: 'Slack',
              href: 'https://tigateams.slack.com/archives/C020D7YSJBZ',
            },
            {
              label: 'Gitter',
              href: 'https://gitter.im/tigateam/tigago',
            },
            // {
            //   label: 'Discord',
            //   href: 'https://discordapp.com/invite/docusaurus',
            // },
            // {
            //   label: 'Twitter',
            //   href: 'https://twitter.com/docusaurus',
            // },
          ],
        },
        {
          title: 'More',
          items: [
            // {
            //   label: 'Blog',
            //   to: '/blog',
            // },
            {
              label: 'tigago-demo',
              href: 'https://github.com/tigateam/tigago-demo',
            },
          ],
        },
        {
          title: 'Links',
          items: [
            {
              label: 'TigaTeam Homepage',
              href: 'https://github.com/tigateam',
            },
            {
              label: 'Misitebao‘s Blog',
              to: 'https://blog.misitebao.com',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Misitebao. Built with Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/tigateam/tigago-website/edit/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/tigateam/tigago-website/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
