const path = require('path');


const resolve = {
    extensions: ['.js', '.jsx'],
    alias: {
        '@calypso/ui': path.resolve(__dirname, '../src/ui/components/'),
        '@calypso/tools': path.resolve(__dirname, '../src/tools/'),
        '@calypso/hooks': path.resolve(__dirname, '../src/tools/hooks/'),
        '@calypso/core': path.resolve(__dirname, '../src/core/'),
        '@calypso/base': path.resolve(__dirname, '../src/base/')
    }
};

module.exports = {
    resolve
}