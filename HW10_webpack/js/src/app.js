const header = require('./scripts/header')();
const footer = require('./scripts/footer')();
const main = require('./scripts/main')();
const $ = require('jquery');

$('body').append(header);
$('body').append(main);
$('body').append(footer);