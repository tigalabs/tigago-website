module.exports = {
	base: '/',//基础路径
	head: [
		['meta', { name: 'keywords', content: 'vuepress 模板' }]
	],
	host: '0.0.0.0',
	dest: './dist',//打包输出目录
	markdown: {
		lineNumbers: true
	},
	plugins: ['@vuepress/back-to-top'],
	theme: undefined,
	themeConfig: {
		logo: '/images/logo.jpg',
		repo: 'https://github.com/tigateam/tigago', // 顶部显示的github地址
		docsRepo: 'https://github.com/tigateam/tigago-website', //文档内改进页面的仓库地址
		docsDir: 'docs', //文档目录
		docsBranch: 'master', //分支
		editLinks: true,
		locales: {
			'/': {
				selectText: 'Languages',
				label: 'English',
				repoLabel: 'Source',
				editLinkText: 'Edit this page on GitHub',
				lastUpdated: 'Last Updated',
				serviceWorker: {
					updatePopup: {
						message: "New content is available.",
						buttonText: "Refresh"
					}
				},
				algolia: {},
				sidebarDepth: 2,
				sidebar: 'auto',
				nav: [
					{
						text: 'Home', link: '/book/'
					},
					{
						text: 'Documentation', link: '/book/documentation/Introduction'
					},

				],
				sidebar: {
					'/book/documentation/': [
						{
							title: 'Introduction',
							path: '/book/documentation/Introduction',
						}, {
							title: 'JoinUs',
							path: '/book/documentation/JoinUs',
						}, {
							title: 'Preparation',
							path: '/book/documentation/Preparation',
							collapsable: true,
							children: [
								'/book/documentation/Preparation/',
								'/book/documentation/Preparation/EnvironmentInstallation',
							]
						}, {
							title: 'QuickStart',
							path: '/book/documentation/QuickStart',
							collapsable: true,
							children: [
								'/book/documentation/QuickStart/',
							]
						}, {
							title: 'FAQ Question Answer',
							path: '/book/documentation/FAQ',
						},
					],
					'/book/dir-b/': [
						{
							title: 'Quickstart',
							path: '/book/dir-b/',
							collapsable: false,
							children: [
								'/book/dir-b/file-1',
								'/book/dir-b/file-2',
								'/book/dir-b/file-3']
						}
					],
				}
			},
			'/zh/': {
				// 多语言下拉菜单的标题
				selectText: '选择语言',
				// 该语言在下拉菜单中的标签
				label: '简体中文',

				repoLabel: '查看源码',
				// 以下为可选的编辑链接选项
				// 默认为 "Edit this page"
				editLinkText: '帮助我们改善此页面！',
				// 最后更新时间
				lastUpdated: '最后更新时间',
				// Service Worker 的配置
				serviceWorker: {
					updatePopup: {
						message: "发现新内容可用.",
						buttonText: "刷新"
					}
				},
				// 当前 locale 的 algolia docsearch 选项
				algolia: {},
				sidebarDepth: 2,
				sidebar: 'auto',
				nav: [
					{
						text: '主页', link: '/zh/book/'
					},
					{
						text: '文档', link: '/zh/book/documentation/Introduction'

					},
				],
				sidebar: {
					'/zh/book/documentation/': [
						{
							title: '框架介绍',
							path: '/zh/book/documentation/Introduction',
						}, {
							title: '加入我们',
							path: '/zh/book/documentation/JoinUs',
						}, {
							title: '准备工作',
							path: '/zh/book/documentation/Preparation',
							collapsable: true,
							children: [
								'/zh/book/documentation/Preparation/',
								'/zh/book/documentation/Preparation/EnvironmentInstallation',
							]
						}, {
							title: '快速开始',
							path: '/zh/book/documentation/QuickStart',
							collapsable: true,
							children: [
								'/zh/book/documentation/QuickStart/',
							]
						}, {
							title: 'FAQ 疑问解答',
							path: '/zh/book/documentation/FAQ',
						},
					],
					'/zh/book/dir-b/': [{
						title: '入门',
						path: '/zh/book/dir-b/',
						collapsable: false,
						children: [
							'/zh/book/dir-b/file-1',
							'/zh/book/dir-b/file-2',
							'/zh/book/dir-b/file-3'
						]
					}]
				}
			}
		}
	},
	locales: {
		// 键名是该语言所属的子路径
		// 作为特例，默认语言可以使用 '/' 作为其路径。
		'/': {
			lang: 'en-US', // 将会被设置为 <html> 的 lang 属性
			title: 'Tigago Web Framework',
			description: `Tigago is a modular, high performance, production level go basic development framework`
		},
		'/zh/': {
			lang: 'zh-CN',
			title: 'Tigago Web Framework',
			description: 'Tigago 是一款模块化、高性能、生产级的Go基础开发框架'
		}
	}
}