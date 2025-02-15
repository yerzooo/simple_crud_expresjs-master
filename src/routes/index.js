const fs = require('fs');
const path = require('path');

const routes = {};

fs.readdirSync(__dirname).forEach((file) => {
    if (file !== 'index.js' && file.endsWith('.js')) {
        const moduleName = path.basename(file, '.js');
        routes[moduleName] = require(path.join(__dirname, file));
    }
});

module.exports = routes;
