/* 
Создать функцию, которая возвращает промис.  Функция принимает два аргумента - время, через которое промис
 должен выполниться, и значение, с которым промис будет выполнен. 

function promiseCreator(...) {...}
const prom = promiseCreator(500, 'Ok!');
prom.then(console.log);
// Ok!
*/
function promiseCreator(data, time) {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() =>
            resolve(data), time);
    });
    promise.then(data => console.log(data));
}

promiseCreator('Ok', 1000);

/* Создать класс, который будет иметь следующие свойства:
- promise - промис, который создается во время запуска конструктора;
- reject - метод, при выполнении которого promise реджектится;
- resolve - метод, при выполнении которого promise резолвится.


class Prom {...}
const promise1 = new Prom();
promise1.promise.then(data => console.log(data));
promise1.resolve('test'); // test
*/
// class MyPromise {
//     constructor() {
//         this.promise = new Promise();
//         this.resolve = resolve;
//         this.reject = reject;
//     }
// resolve() {

// }
// reject() {

// }
// }

/* Используя класс из 2й задачи, создать html c кнопкой и текстовым полем. 
При нажатии на кнопку созданный промис должен выполняться со значением из текстового поля.
*/

/* Используя fetch метод, создать get запрос к адресу https://jsonplaceholder.typicode.com/posts. 
Отобразить в списке ul полученные поля из response. Показывать только id и title поля.
*/
const url = 'https://jsonplaceholder.typicode.com/posts/';
const idArr = [];
const titleArr = [];

const postsId = fetch(url).then(response => {
    let dataPromise = response.json();
    dataPromise.then((posts) => posts.map((post) => idArr.push(`${post.id}`)));
    dataPromise.then((posts) => posts.map((post) => titleArr.push(`post title: ${post.title}`)));
});
const createTag = (tag) => {
    return document.createElement(`${tag}`);
}
const ul = createTag('ul');
const li = createTag('li');
const createList = (arr) => {
    console.log(idArr[1]);
}
createList(idArr);