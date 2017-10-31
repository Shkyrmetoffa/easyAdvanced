const builder = require('./elementBuilder');

module.exports = () => {
    const content = '<h1>Footer</h1>'

    return builder('footer', content, 'footer');
}