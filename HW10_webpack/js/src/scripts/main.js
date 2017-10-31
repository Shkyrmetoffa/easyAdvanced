const builder = require('./elementBuilder');

module.exports = () => {
    const getDate = () => new Date().toLocaleDateString();
    const content = `<h2> Block Created</h2> 
          <span>${getDate()}</span>`;
    return builder('div', content, 'div');
}