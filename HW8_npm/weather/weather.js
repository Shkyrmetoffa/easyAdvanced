/*
Создать проект “weather”. 
Сделать гет запрос к сайту “http://wttr.in/~kharkov”. 
Сохранить полученные данные в файл weather.html.
Запуск приложения должен производиться через npm start.
Для решения данной задачи можно устанавливать любые пакеты и использовать любые модули.
Все зависимости должны быть отображены в package.json.
 */
const https = require('http');
var fs = require('file-system');

https.get('http://wttr.in/~kharkov', (res) => {
    if (res.statusCode !== 200) throw new Error(res.statusCode);
    res.setEncoding('utf-8');
    let result = '';
    res.on('data', data => result += data);
    res.on('end', () => fs.writeFile('weather.html', result, err => console.log(err)));
})