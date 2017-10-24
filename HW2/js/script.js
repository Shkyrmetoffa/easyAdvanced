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
let createNewObj = (...props) => Object.assign(...props);

createNewObj({ test: 123 }, { value: 'hello' }, { flag: false });

/* Используя синтаксис коротких свойств, создать функцию-стрелку, которая будет принимать два аргумента 
(имя и возраст), а возвращать объект вида { name:..., age:...}. Имя и возраст по умолчанию - ‘User’, 25:
getObject(); //  {name: "User", age: 25}
getObject('Vasya', 10); // {name: "Vasya", age: 10}
*/
const getObject = (name = 'User', age = '25') => ({ name, age });
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
    constructor(tagname = 'div') {
        this.tagName = tagname;
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
    constructor(angles = 1) {
        this.angles = angles;
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
    constructor(angles, name = 'triangle') {
        super(angles);
        this.abstract = false;
        this.name = name;
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
        this.table = this.createTable(this.tr, this.tr);

    }
    createTable(tr, td) {
        let arr = [];
        for (let i = 0; i < tr; i++) {
            arr[i] = [];
            for (let k = 0; k < td; k++) {
                arr[i][k] = '';
            }
        }
        return arr;
    }
    static getAllCells(tr, td) {
        return tr * td;
    }

    setTextOfCell(row, col, text) {
        let newArr = this.table;
        newArr[row][col] = text;
        return newArr;
    }
    getTextOfCell(row, col) {
        console.log(this.table[row][col]);
    }
    getInfo() {
        return {
            allCells: Table.getAllCells(this.tr, this.td),
            allTr: `${this.tr}`,
            allTd: `${this.td}`
        }
    }
}
// const table = new Table(3, 3);
// table.getInfo();
// table.setTextOfCell(1, 1, 'G');
// table.getTextOfCell(1, 1);

/*
Реализовать наследника от класса Таблица из 5го задания. При инициализации класс принимает третий аргумент
 - имя таблицы (по умолчанию - table).

Метод “получить информацию о таблице” (количество ячеек, количество строк, количество колонок) должен также 
содержать имя таблицы.

У наследника также должен быть дополнительный метод для изменения имени таблицы, но при изменении имя не может 
быть пустым.
*/
class TableName extends Table {
    constructor(name = 'table') {
        super();
        this.name = name;
    }
    getInfo() {
        const props = super.getInfo();
        props.name = this.name;
        return props;
    }
    editName(name) {
        this.name = name;
        this.name !== "" ? this.name : console.log('Enter your name');
    }
}
const tableName = new TableName();
tableName.editName('');
tableName.getInfo();