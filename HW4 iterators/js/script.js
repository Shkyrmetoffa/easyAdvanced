/*1. Превратить объект в итерируемую коллекцию:
const  names = { 0: 'Vasya', 1: 'Petya', 2: 'Kolya' };
Для этого в объект добавить свойство length (вручную количество ключей не считать) и Symbol.iterator.
*/
const names = { 0: 'Vasya', 1: 'Petya', 2: 'Kolya' };
names.length = Object.keys(names).length;
names[Symbol.iterator] = function() {
    let index = 0;
    return {
        next: () => {
            return {
                value: this[index++],
                done: index > this.length
            }
        }
    }
}
for (let val of names) {
    console.log(val);
};

/*2. Дан объект const obj = { zone: true, word: 'test', skill: 'JS', name: 'John' }.
Вывести значения ключей в алфавитном порядке (сортировка по ключам): name, skill, word, zone. Сортировка должна 
выполняться автоматически.
for (let l of obj) { console.log(l); } ⇒  //  "John" " JS" "test" true
*/
const obj = { zone: true, word: 'test', skill: 'JS', name: 'John' };
obj[Symbol.iterator] = function() {
    let index = 0;
    let keys = Object.keys(this);
    let self = this;

    return {
        next() {
            let keysSorted = keys.sort();
            if (index < keys.length) {
                return {
                    value: self[keysSorted[index++]],
                    done: false
                }
            } else {
                return {
                    done: true
                };
            }
        }
    }
}
for (let val of obj) {
    console.log(val);
};



/*3. Создать такой итерируемый объект, который выводит в цикле все составные текущей даты (год, месяц, день, число, часы, минуты, секунды).
Пример:
const date = { [Symbol.iterator]: function () { ... } };

for (let val of date) console.log(val);
// FullYear is 2017
// Month is 4
...
// Seconds is 21
*/