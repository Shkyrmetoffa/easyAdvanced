/*
Создать проект, используя npm init. 
Установить пакет https://www.npmjs.com/package/file-system 
Используя модуль file-system, создать папку с произвольным названием, в ней создать текстовый файл c текущей датой.
Запуск скрипта должен производиться командой npm run createDir.
Все зависимости должны быть отображены в package.json
 */
var fs = require('file-system');
fs.mkdirSync('text');
fs.writeFile('text/date.txt', new Date().toLocaleString(), err => console.log(err));