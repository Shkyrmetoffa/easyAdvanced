// const prettyDate = require('./date');
// console.log(prettyDate());
// //
// const read = require('./read');

// read('name.txt', text => console.log(text));
// //
// async function readFile() {
//     let text;
//     try {
//         text = await read('name.txt', text => console.log(text));
//     } catch (err) {
//         text = err.message;
//         console.log('err' + text);
//     }
// }
// readFile();
// //
// const http = require('http');

// http.get('http://info.cern.ch', (res) => {
//     if (res.statusCode !== 200) throw new Error(res.statusMessage);
//     res.setEncoding('utf-8');
//     res.on('data', console.log);
// });
// //
// const https = require('https');

// https.get('https://jsonplaceholder.typicode.com/posts', (res) => {
//     if (res.statusCode !== 200) throw new Error(res.statusCode);
//     res.setEncoding('utf-8');
//     let result = '';
//     res.on('data', data => result += data); // записываем в переменную новую порцию данных
//     res.on('end', () => console.log(result)); // когда запрос завершён, выводим в консоль текст
// });

const fs = require('fs');
const text = fs.readFileSync('name.txt');
console.log(text);
console.log('text');