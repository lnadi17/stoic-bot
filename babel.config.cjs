// babel.config.js
module.exports = {
    env: {
        test: {
            plugins: ["@babel/plugin-transform-modules-commonjs", "@babel/plugin-syntax-top-level-await"],
            // presets: [['@babel/preset-env', { targets: { node: 'current' } }]]
        }
    }
};