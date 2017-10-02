const list = [{ children: ['a', 'b', 'c'] }, {}, { children: ['z', 'c', 'f', 'o'] }, { children: ['t', 'r', 'v'] }];
list.splice(1, 1);

let newList = list.reduce(function(prev, val, i) {
    return [...prev, ...val.children];
}, '');
console.log(newList);

// --> ['a', 'b', 'c', 'z', 'c', 'f', m 'o', 't', 'r', 'v'];
/*1. Создать функцию, которая возвращает промис.  Функция принимает два аргумента - время, через которое промис
 должен выполниться, и значение, с которым промис будет выполнен. 

function promiseCreator(...) {...}
const prom = promiseCreator(500, 'Ok!');
prom.then(console.log);
// Ok!
*/
const promiseCreator = (time, data) => new Promise((resolve, reject) => {
    setTimeout(() => resolve(data), time);
});
const prom = promiseCreator(500, 'Ok!');
prom.then(console.log);

/*2. Создать класс, который будет иметь следующие свойства:
- promise - промис, который создается во время запуска конструктора;
- reject - метод, при выполнении которого promise реджектится;
- resolve - метод, при выполнении которого promise резолвится.

class Prom {...}
const promise1 = new Prom();
promise1.then(data => console.log(data));
promise1.resolve('test'); // test
*/
class Prom {
    constructor(func) {
        this.promise = new Promise((func) => {
            this.resolve = (val) => func(val);
            this.reject = (error) => new Error();
        })
    }
}

const promise1 = new Prom();
promise1.promise.then(data => console.log(data));
// test
/* Используя класс из 2й задачи, создать html c кнопкой и текстовым полем. 
При нажатии на кнопку созданный промис должен выполняться со значением из текстового поля.
*/
let button = document.querySelector('button');
let input = document.querySelector('input');

button.addEventListener('click', () => {
        promise1.resolve(input.value);
        input.value = "";
    })
    /*4. Используя fetch метод, создать get запрос к адресу https://jsonplaceholder.typicode.com/posts. 
    Отобразить в списке ul полученные поля из response. Показывать только id и title поля.
    */
const url = 'https://jsonplaceholder.typicode.com/posts/';
const ul = document.querySelector('ul');
fetch(url).then(response => response.json())
    .then((posts) => {
        let li = '';
        posts.forEach(post => li += `<li> post id: ${post.id}  post title: ${post.title} </li>`);
        ul.insertAdjacentHTML('afterBegin', li);
    });

/*5. Выполнить два запроса: 
- https://jsonplaceholder.typicode.com/posts  
- https://jsonplaceholder.typicode.com/users. 

Вывести в консоль информацию о количестве постов и юзеров.
Запросы должны выполняться одновременно, информацию выводить только после того, как будут обработаны оба запроса
*/
const url2 = 'https://jsonplaceholder.typicode.com/users';
// 1 way
const promAll = Promise.all([
        fetch(url).then(response => response.json()),
        // 
        fetch(url2).then(response => response.json())
        // .then()
    ])
    .then(response => {
        const users = response[0];
        const posts = response[1];
        console.log(`users: ${users}
                     posts: ${posts}`);
    })
    // 2 way
const promAll2 = Promise.all([
        fetch(url),
        fetch(url2)
    ])
    .then(response => Promise.all(response.map(item => item.json())))
    .then(console.log);