// Вычислить максимальное число в массиве чисел.

const arr = [34, 54, 3, 443, 76, 2, 15];
Math.max(...arr);

// Даны массивы const a = [1, 2, 3]; const b = [4, 5, 6];
// Создать новый массив, содержащий элементы из a и b

const a = [1, 2, 3];
const b = [4, 5, 6];
const c = [...a, ...b];
console.log(c);

// Cоздать функцию, которая записывает в документ все строки,
// переданные в функцию. Строк может быть сколько угодно.

let writeToDocument = (...opts) => {
    document.write(...opts);
}
writeToDocument('test ', 'gate ', 'string ', 'Carpe Diem');

/*
Используя rest оператор и деструктуризацию, создать функцию, которая принимает 
любое количество аргументов и возвращает объект, содержащий первый аргумент и массив из остатка:

func(‘a’, ‘b’, ‘c’, ‘d’) → 
{
  first: ‘a’,
  other: [‘b’, ‘c’, ‘d’]
}
*/
let getObj = (first, ...other) => {
    return { first, other };
}
console.log(getObj('hello', 'my', 'name', 'is', 'Jane'));

/* 
Организовать функцию getInfo, которая принимает объект вида
{ name: ...,  info: { employees: ..., partners: [ … ]  } }
и выводит в консоль имя (если имени нет, показывать ‘Unknown’) и первые две компании из массива employees:
const organisation = {  
  name: 'Google',   
  info: { employees: 1536, partners: ['Microsoft', 'Facebook', 'Xing']   } 
};
getInfo(organisation); → 
Name: Google 
Partners: Microsoft Facebook
*/
const organisation = {
    name: 'Google',
    info: { employees: 1536, partners: ['Microsoft', 'Facebook', 'Xing'] }
};
let getInfo = ({ name = 'Unknown', info: { partners: [company1, company2] } }) => {
    console.log(name, company1, company2);

}
getInfo(organisation);

/*
Переделать функцию с использованием функции-стрелки (в методе reduce тоже использовать arrow function):
function sum() {
  const params = Array.prototype.slice.call(arguments);
  if (!params.length) return 0;
  return params.reduce(function (prev, next) { return prev + next; });
}

*/

let sum = (...args) => {
    const params = args;
    if (!params.length) {
        return 0;
    }
    return params.reduce((prev, next) => { return prev + next; });
}
console.log(sum(1, 2, 3, 4)); // 10
console.log(sum()); // 0

/* Исправить функцию так, чтобы вместо undefined в массиве выводилось значение поля prefix:
 */
const utils = {
    numbers: [1, 2, 3, 4],
    prefix: 'number',
    getOdd: function() {
        console.log(this);
        return this.numbers.map(number => this.prefix + ' - ' + number);
    }
};
console.log(utils.getOdd()); // ["undefined - 1", "undefined - 2", "undefined - 3", "undefined - 4"]

/* Переделать функции в стрелочные функции, использовать, где возможно, короткий синтаксис:
function getDate() { return new Date(); }
function getDay() {
  const days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
  return days[new Date().getDay()];
}
function getListCopy(list) { return list.slice(); }
*/
let getDate = () => new Date();
// console.log(getDate());

let getDay = () => {
        const days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
        return days[new Date().getDay()];
    }
    // console.log(getDay());

let getListCopy = (list) => list.slice();
// console.log(getListCopy('list'));