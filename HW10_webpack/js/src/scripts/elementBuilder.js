const $ = require('jquery');
module.exports = (tag = 'div', content = '', className = 'box') => {
    const element = document.createElement(tag);
    $(element).addClass(className)
        .html(content);
    return element;
}