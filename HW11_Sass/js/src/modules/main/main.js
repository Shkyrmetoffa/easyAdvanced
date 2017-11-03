const builder = require('../elementBuilder');
require('./main.scss');

module.exports = () => {
    const getDate = () => new Date().toLocaleDateString();
    const content = `Oh no! You've been hacked!`;
    return builder('div', content, 'error form-error');
}