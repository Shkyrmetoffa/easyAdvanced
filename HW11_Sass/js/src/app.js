const header = require('./modules/header/header')();
const main = require('./modules/main/main')();
const footer = require('./modules/footer/footer')();
require('./app.scss');
const $ = require('jquery');

$('body').append(header).append(main).append(footer);