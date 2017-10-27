/* 1. Используя пример со слайдов “Node.js: server - read from file system”, модифицировать ответ так, чтобы 
сервер мог отдавать любые картинки, а не только картинку с именем "img.png".
*/
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {

    if (/jpg|png|gif|jpeg|js/.test(req.url)) {
        fs.readFile(req.url.replace('/', ''), (err, data) => {
            if (err) {
                res.end('<strong>Error</strong>');
                throw new Error('Error while reading img');
            };
            res.end(data);
        });
        return;
    }
    fs.readFile('index.html', 'utf-8', (err, data) => {
        if (err) {
            res.end('<strong>Error</strong>');
            throw new Error('Error while reading index.html');
        };
        const getDate = () => new Date().toLocaleDateString();
        res.end(data.replace('</body>', `${getDate()} <script src="main.js"></script></body>`));
    })
});
server.listen(3000, () => console.log('Listen on localhost 3000'));

/* 2. Используя решение из предыдущей задачи, подключить к index.html файл main.js. Скрипт должен выводить в 
консоль браузера размеры картинки.
Подсказка: сервер должен уметь “отдавать” js-файлы.
*/

/* 3. Создать package.json и сделать в нём изменения, чтобы сервер мог быть запущен из консоли командой npm run server.
 */
/* 4. Модифицировать ответ сервера так, чтобы внизу страницы всегда отображалась текущая дата (число, месяц, год). */