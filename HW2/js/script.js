const getUser = (index = 0) => {
    const names = ['Ilia', 'John', 'Jane'];
    const indx = index > names.length - 1 ? names.length - 1 : index;
    return {
        [`name${indx}`]: names[indx]
    }
}
getUser(1);

/* Создать функцию-стрелку, которая принимает любое количество объектов и возвращает новый объект,
 которые содержит в себе все свойства из объектов при вызове функции: 
getOneObject( {test: 123}, {value: 'hello'}, {flag: false} ); → 
{test: 123, value: "hello", flag: false}
getOneObject( {foo: 'boo!'}, {msg: 'fire!'} ); → 
{foo: "boo!", msg: "fire!"}
*/
let createNewObj = (...props) => {
    return Object.assign(...props);
}
createNewObj({ test: 123 }, { value: 'hello' }, { flag: false });

/* Используя синтаксис коротких свойств, создать функцию-стрелку, которая будет принимать два аргумента 
(имя и возраст), а возвращать объект вида { name:..., age:...}. Имя и возраст по умолчанию - ‘User’, 25:
getObject(); //  {name: "User", age: 25}
getObject('Vasya', 10); // {name: "Vasya", age: 10}
*/
const getObject = (name = 'User', age = '25') => { return { name, age } };
console.log(getObject());
/* Реализовать объект со значением некоторой произвольной строки. В объекте должны быть созданы метод 
“получить длину строки” и метод “получить строку-перевёртыш”. Использовать короткий синтаксис для создания 
методов.
*/
const obj = {
    getStringLength(str) {
        return str.length;
    },
    getStringReverse(str) {
        return str.split('').reverse().join('');
    }
}
obj.getStringLength("fafa");
obj.getStringReverse("fafa");
/*
Реализовать конструктор в ES6 синтаксисе:

function Component(tagName) {
  tagName = tagName || 'div';
  this.node = document.createElement(tagName);
}

Пример вызова:

const comp = new Component('span');
*/
class Component {
    constructor(tagname) {
        this.tagName = tagname || 'div';
        this.node = document.createElement(this.tagName);
    }
}
const comp = new Component('span');

/*
function Component(tagName) {
  tagName = tagName || 'div';
  this.node = document.createElement(tagName);
}

Component.prototype.setText = function (text) { 
  this.node.textContent = text;
};
*/
class Comp {
    constructor(tagName) {
        this.tagName = tagName;
        this.node = document.createElement(tagName);
    }
    setText(text) {
        this.node.textContent = text;
    }
}
/*
Реализовать конструктор и наследование в ES6 синтаксисе
 */
class InputComponent extends Comp {
    constructor(tagName) {
        super(tagName);
        this.node.placeholder = 'Enter text';
    }
    setText(text) {
        this.node.value = text;
    }
}
const inComp = new InputComponent('input');

/* Реализовать конструктор и наследование в ES6 синтаксисе: */
class Figure {
    constructor(angles) {
        this.angles = angles || 1;
        this.abstract = true;
    }
    getInfo() {
        return {
            angles: this.angles,
            abstract: this.abstract
        }

    }
}
class Triangle extends Figure {
    constructor(angles, name) {
        super(angles);
        this.abstract = false;
        this.name = name || 'triangle';
    }
    getInfo() {
        const props = super.getInfo();
        props.name = this.name;
        return props;
    }
}
const triangle = new Triangle();
triangle.getInfo();
/* Реализовать класс Таблица, который
 при инициализации принимает количество строк и колонок (по умолчанию - 3 * 3). 

У класса должны быть методы: 
- получить общее количество ячеек (строки * колонки);
- установить текст ячейки (метод принимает номер строки и номер колонки); 
- получить текст ячейки (метод принимает номер строки и номер колонки);
- получить информацию о таблице в виде объекта (количество ячеек, количество строк, количество колонок).

У класса должен быть статический метод, который позволяет узнать количество ячеек (метод принимает 
количество строк и количество колонок)
*/
class Table {
    constructor(tr = 3, td = 3) {
        this.tr = tr;
        this.td = td;
    }
    createTable(tr, td) {
        let arr = [];
        for (let i = 0; i < tr; i++) {
            arr[i] = [];
            for (let k = 0; k < td; k++) {
                arr[i][k] = 'H';
                console.log(arr);
                return arr;
            }
        }
    }
    static getAllCells(tr, td) {
        return tr * td;
    }
    get textOfCell() {
            console.log(`${this.tr}, ${this.td}`);
        }
        // get textOfCell(numTr, numTd) {

    // }
    getInfo() {
        return {
            allCells: Table.getAllCells(5, 5),
            allTr: `${this.tr}`,
            allTd: `${this.td}`
        }
    }
    init() {
        this.createTable(5, 5);
        this.getInfo();
        this.textOfCell;
    }
}
const table = new Table(6, 6);
// console.log(table.getInfo());
// table.textOfCell;
// console.log(table.textOfCell());
table.init();