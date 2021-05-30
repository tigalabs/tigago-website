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
    defaultLocale: 'en',
    locales: ['en', 'zh-hans'],
    localeConfigs: {
      en: {
        label: 'English',
        direction: 'ltr',
      },
      "zh-hans": {
        label: '简体中文',
        direction: 'ltr',
      },
    },
  },
  themeConfig: {
    navbar: {
      // style: 'dark',
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
        { type: 'localeDropdown', position: 'right', },
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
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/tigateam/tigago',
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
