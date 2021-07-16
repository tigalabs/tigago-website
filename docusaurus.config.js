const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Tigago',
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
    defaultLocale: 'zh-Hans',
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
    navbar: {
      title: 'Tigago',
      logo: {
        alt: 'Tigago Site Logo',
        src: 'img/logo.jpg',
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
          label: 'Doc',
        },
        { to: '/blog', label: 'Blog', position: 'right' },
        {
          type: 'localeDropdown',
          position: 'right',
          dropdownItemsAfter: [
            { to: 'https://github.com/tigateam/tigago-website/issues/4', label: 'Help Translate', }, //Can add custom pages
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
            'https://github.com/tigateam/tigago-website/edit/master/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/tigateam/tigago-website/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
