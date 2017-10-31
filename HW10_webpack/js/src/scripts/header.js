const builder = require('./elementBuilder');

module.exports = () => {
    const content = '<h1>Header</h1>'

    return builder('header', content, 'header');
}