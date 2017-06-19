const { FuseBox, SassPlugin, CSSPlugin, CSSResourcePlugin } = require('fuse-box');

const fuse = FuseBox.init({
    homeDir: 'src',
    output: 'dist/$name.js',
    plugins: [
        [SassPlugin(), CSSResourcePlugin({ dist: 'dist/assets', resolve: f => `/assets/${f}` }), CSSPlugin()]
    ]
});

fuse.bundle('app').instructions('> [index.ts]');

fuse.run();