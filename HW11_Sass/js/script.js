// const promise = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         resolve('some text');
//     }, 1000)
// });
// promise.then(data => console.log('Success!', data))
//     .catch(data => console.log('Error!', data));
// console.log(promise);
const nums = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three'
        // length: 4
};
// nums[Symbol.iterator] = function() {
//     let index = 0;
//     const length = Object.keys(this).length; // получаем длину
//     return {
//         next: () => {
//             return {
//                 value: this[index++],
//                 done: index > this.length
//             }
//         }
//     }
// }
// for (let val of nums) {
//     console.log(val);
// }
const obj = {
    from: 0,
    to: 3,
    [Symbol.iterator]: function() {
        let index = this.from;
        return {
            next: () => ({
                value: index++,
                done: index > this.to
            })
        }
    }
}
for (let num of obj) {
    console.log(num);
}
const alphabet = {
    [Symbol.iterator]: function() {
        let index = 61;
        return {
            next: () => ({
                value: String.fromCharCode(index++),
                done: index > 99
            })
        };
    }
}
console.log([...alphabet]);

// Array.from(псевдомассив) превращает в итерируемый объект
const numbers = {
    0: 'zero',
    1: 'one',
    2: 'two',
    length: 3
};
const iterable = Array.from(numbers);
console.log(iterable);