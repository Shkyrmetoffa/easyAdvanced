/* Сделать три последовательных запроса, то есть следующий запрос не происходит, пока успешно не выполнился
 предыдущий. В конце вывести в консоль результат последнего запроса.
Используем reduce

var list = [
   'https://jsonplaceholder.typicode.com/users', 
   'https://jsonplaceholder.typicode.com/posts', 
   'https://jsonplaceholder.typicode.com/albums'
];

list.reduce(...)
.then(console.log) // --> albums
*/
var list = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
];

list.reduce((preval, val) => fetch(val)
        .then(resp => resp.json()), "")
    // .then(console.log)

/*Есть три переменные
const num1 = 10;
const num2 = 20;
const operator = '>';

Как из этих переменных получить результат выражения num1 operator num2?
То есть 10 > 20

<<< 
решить можно с помощью:
1) switch и перечисление всевозможных операторов
2) eval(здесь строка-выражение)
3) new Function(здесь строка-выражение)
*/
const num1 = 10;
const num2 = 20;
const operator = '>';

const getResult = new Function('num1, num2, operator', `return num2 + operator + num1;`);
console.log(getResult(num1, num2, operator));

/* С помощью async функции и fetch() выполнить get запрос к ресурсу.
Из полученного массива построить список юзеров, имеющий вид:

“Пользователь userID=1 имеет 5 завершенных и 6 не завершенных заданий”
“Пользователь userID=2 имеет 3 завершенных и 7 не завершенных заданий”
“Пользователь userID=3 имеет 8 завершенных и 2 не завершенных заданий”
…

Список должен выводиться на страницу в виде ul.
*/
const getTodos = async() => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const todos = await response.json();
    return todos;
};

const renderTodos = async() => {
    const todos = await getTodos();
    const ul = document.createElement('ul');
    let obj = {};
    let arrLi = [];

    todos.forEach(user => {
        obj[user.userId] = obj[user.userId] || [];
        obj[user.userId].push(user);
    });

    for (let val in obj) {
        let done = 0;
        let reject = 0;

        obj[val].map(item => {
            item.completede ? done++ : reject++;
        });

        arrLi.push(
            `<li>Пользователь userId ${val} имеет ${done} сделанных и ${reject} несделанных задач</li>`
        );
    }

    ul.innerHTML = arrLi.join('');
    document.body.insertAdjacentElement('afterbegin', ul);
};

renderTodos();

// 2 way

// let arr = todos.map(todo => {
//     return todo.userId;
// })
// arr = new Set(arr);
// let set = [...arr];
// const arrLi = set.map(elem => {
//     let done = 0;
//     let reject = 0;
//     todos.filter((val) => {
//         if (val.userId === elem) {
//             (val.completed == true) ? done++ : reject++;
//         }
//     });
//     return `<li>Пользователь userId ${elem} имеет ${done} сделанных и ${reject} несделанных задач</li>`;
// });
// ul.innerHTML = arrLi.map(li => li).join('');
// document.body.insertAdjacentElement('afterbegin', ul);
// }



/* Подключить jQuery и, используя сервис jsonplaceholder, создать функцию, которая сделает POST запросы для 
добавления любого количества юзеров (примеры там же). 
Каждый успешный запрос будет возвращать ответ в виде созданного юзера (объект с дополнительными полем id).
После последнего запроса показать информацию о всех юзерах на странице (использовать codepen или любой другой 
онлайн-редактор).

createUsers([{name: 'Vasya', age: 25}, {name: 'Petya', age: 40}]);

При использовании codepen или другого ресурса с httpS, запрос следует слать на тот же протокол httpS
 https://jsonplaceholder.typicode.com/users
 */

//https://codepen.io/JaneShkyrmetoffa/pen/QqBNRK

/* создать функцию, которая будет принимать генератор и возвращать массив значений, которые yield-ит генератор, 
но не больше 100 значений:
function getValuesFromGenerator ...

getValuesFromGenerator(function* () {
  yield 5;
  yield 15;
  yield 25;
});
--> [5, 15, 25]

getValuesFromGenerator(function* () {
  let i = 0;
  while (true) { yield i++; }
});
--> [0, 1, 2, 3, 4, 5, 6 ... 99]
Также предусмотреть, что в функцию может быть передано неверное значение (обычная функция, или ничего не передано).
 В этом случае вернуть пустой массив.
 */
function getValuesFromGenerator(gen) {
    if (/generator/i.test(Object.prototype.toString.call(gen)) == true) {
        const it = gen();
        let arr = [];

        while (arr.length < 100) {
            arr.push(it.next().value);
        }
        return arr;
    } else {
        return [];
    }
}
// console.log(
//     getValuesFromGenerator(function*() {
//         let i = 0;
//         while (true) {
//             yield i++;
//         }
//     })
// );
// getValuesFromGenerator(function*() {
//     yield 5;
//     yield 15;
//     yield 25;
// });

/* Задача на запросы.
Есть список урлов. Необходимо выполнить запрос ко всем ресурсам и вывести в консоль массив ответов.
Последний url в этом списке невалидный, он генерирует ошибку. Поэтому на выходе мы должны получить массив из 
двух массивов [users, posts] --> [ [{...}, {...}, {...}...], [ {...}, {...}, ... ] ]
Задачу можно решить через Promise.all, через async/await
*/
const listUrl = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.co/albums',
];
const promAll2 = Promise.all(
        listUrl.map(url => fetch(url)
            .then(response => response.json())
            .catch(data => console.log('Error!', data))
        )
    )
    .then(data => data.filter(resp => !!resp))
    .then(console.log);

// Async await way
async function printFiles(list = []) {
    const arr = [];

    for (let val of list) {
        try {
            const res = await fetch(val);
            arr.push(await res.json());
        } catch (err) {
            console.log(err);
        }
    }

    console.log(arr.length);
}

printFiles(listUrl);