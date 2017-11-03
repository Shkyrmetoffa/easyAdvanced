const builder = require('../elementBuilder');
require('./footer.scss');

module.exports = () => {
    const content = '<h1>Footer</h1><p> Text</p>'

    return builder('footer', content, 'footer');
}