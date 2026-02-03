// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
    tutorialSidebar: [
        'intro',
        'why-jobel',
        {
            type: 'category',
            label: '🏗️ Architecture',
            collapsed: false,
            items: [
                'architecture/overview',
                'architecture/multi-agent',
                'architecture/contract-compiler',
            ],
        },
        {
            type: 'category',
            label: '✨ Features',
            collapsed: false,
            items: [
                'features/knowledge-base',
                'features/providers',
                'features/security',
                'features/llm-support',
            ],
        },
        {
            type: 'category',
            label: '📖 Guides',
            items: [
                'guides/quickstart',
                'guides/docker-setup',
                'guides/custom-providers',
            ],
        },
        {
            type: 'category',
            label: '🔌 API Reference',
            items: [
                'api/overview',
                'api/integration',
                'api/onboarding',
            ],
        },
        {
            type: 'category',
            label: '🏢 Enterprise',
            items: [
                'enterprise/features',
                'enterprise/use-cases',
            ],
        },
        {
            type: 'category',
            label: '🌍 Community',
            items: [
                'community/roadmap',
                'community/contributing',
            ],
        },
    ],
};

export default sidebars;
