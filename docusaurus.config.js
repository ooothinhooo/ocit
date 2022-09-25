module.exports = {
    themes: [['docusaurus-theme-awesome', { hello: 'world' }]],
    plugins: [
        ['@docusaurus/plugin-content-docs', { id: 'docs1', path: '/docs' }],
        ['@docusaurus/plugin-content-docs', { id: 'docs2', path: '/community' }],
        ['@docusaurus/plugin-content-docs', { id: 'docs3', path: '/api' }],
    ],
    plugins: ['@docusaurus/plugin-content-pages'],
};
