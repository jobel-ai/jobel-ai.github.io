// @ts-check
// Jobel Documentation - Docusaurus Configuration
// Enterprise-grade documentation for the AI Solutions Architect platform

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'Jobel',
    tagline: 'Your AI Solutions Architect That Never Hallucinates',
    favicon: 'img/favicon.ico',

    // Set the production url of your site here
    url: 'https://jobel-ai.github.io',
    // Set the /<baseUrl>/ pathname under which your site is served
    // Root path since this is the organization's main GitHub Pages site
    baseUrl: '/',

    // GitHub pages deployment config
    organizationName: 'jobel-ai',
    projectName: 'jobel-ai.github.io',
    deploymentBranch: 'gh-pages',
    trailingSlash: false,

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: './sidebars.js',
                    editUrl: 'https://github.com/jobel-ai/jobel-ai.github.io/tree/main/documentation/',
                },
                blog: false, // Disabled until we have blog content
                theme: {
                    customCss: './src/css/custom.css',
                },
            }),
        ],
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            // Social card for sharing
            image: 'img/jobel-social-card.jpg',

            // Announcement bar for launches
            announcementBar: {
                id: 'launch_announcement',
                content: '🚀 <strong>Jobel is now open source!</strong> Star us on <a target="_blank" rel="noopener noreferrer" href="https://github.com/jobel-ai/jobel-ai.github.io">GitHub</a>',
                backgroundColor: '#6366f1',
                textColor: '#ffffff',
                isCloseable: true,
            },

            navbar: {
                title: 'Jobel',
                logo: {
                    alt: 'Jobel Logo',
                    src: 'img/logo.svg',
                },
                items: [
                    {
                        type: 'docSidebar',
                        sidebarId: 'tutorialSidebar',
                        position: 'left',
                        label: 'Documentation',
                    },
                    { to: '/docs/api/overview', label: 'API', position: 'left' },
                    // { to: '/blog', label: 'Blog', position: 'left' }, // Disabled
                    {
                        href: 'https://github.com/jobel-ai/jobel-ai.github.io',
                        label: 'GitHub',
                        position: 'right',
                    },
                ],
            },

            footer: {
                style: 'dark',
                links: [
                    {
                        title: 'Learn',
                        items: [
                            { label: 'Getting Started', to: '/docs/' },
                            { label: 'Architecture', to: '/docs/architecture/overview' },
                            { label: 'API Reference', to: '/docs/api/overview' },
                        ],
                    },
                    {
                        title: 'Community',
                        items: [
                            { label: 'GitHub Discussions', href: 'https://github.com/jobel-ai/jobel-ai.github.io/discussions' },
                            { label: 'Twitter', href: 'https://twitter.com/JobelAI' },
                            { label: 'Discord', href: 'https://discord.gg/jobel' },
                        ],
                    },
                    {
                        title: 'More',
                        items: [
                            // { label: 'Blog', to: '/blog' }, // Disabled
                            { label: 'GitHub', href: 'https://github.com/jobel-ai/jobel-ai.github.io' },
                            { label: 'Roadmap', to: '/docs/community/roadmap' },
                        ],
                    },
                ],
                copyright: `Copyright © ${new Date().getFullYear()} Jobel. Built with ❤️ for developers who ship.`,
            },

            prism: {
                theme: prismThemes.github,
                darkTheme: prismThemes.dracula,
                additionalLanguages: ['bash', 'typescript', 'python', 'json'],
            },

            // Enable dark mode by default
            colorMode: {
                defaultMode: 'dark',
                disableSwitch: false,
                respectPrefersColorScheme: true,
            },

            // Algolia search (optional - configure when ready)
            // algolia: {
            //   appId: 'YOUR_APP_ID',
            //   apiKey: 'YOUR_SEARCH_API_KEY',
            //   indexName: 'jobel',
            // },
        }),
};

export default config;
