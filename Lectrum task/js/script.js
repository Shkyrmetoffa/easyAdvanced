/* У тебя есть массив элементов с произвольным количеством элементов любого типа. Нужно перебрать 
массив с помощью метода forEach. Внутри коллбека метода forEach должен быть произведён вызов асинхронной 
функции над элементом. Подойдет setTimouet или fetch. Например, можно законсолить текущий элемент через 1 
секунду с помощью setTimeout. После выполнения асинхронной функции должна быть соблюдена пауза в 1 секунду, 
и только после этого должен выполниться следующий callback.
 
Условия: Нужно, чтобы каждый новый вызов асинхронной функции ждал выполнения предыдущего вызова асинхронной
 функции. В реализации обязательно нужно использовать промисы.  
 */

[1, 2, 3].forEach(function make(val, index, arr) {
    const promise = value => new Promise(res => setTimeout(() => res(value), 1000));

    if (index == 0) return make.promise = promise(val);

    make.promise = make.promise.then(value => {
        console.log(value);
        return promise(val);
    });

    if (index === arr.length - 1) make.promise.then(console.log);

});