const builder = require('../elementBuilder');
require('./header.scss');

module.exports = () => {
    const content = '<h1>Header</h1><div class="triangle"></div>'

    return builder('header', content, 'header');
}