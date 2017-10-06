/* 1. Создать генератор, который принимает любое число (SN). Генератор создаёт итератор, каждый вызов которого 
возвращает результат умножения числа  SN на предыдущий результат (SN*SN, SN*SN*SN...). Если число получилось 
больше миллиарда, итератор должен сгенерировать ошибку:
function* getValue(number) { … }
 const valuer = getValue(5);
valuer.next().value; → 25 (5 * 5)
valuer.next().value; → 125 (25 * 5)
valuer.next().value; → 625 (125 * 5)
const valuerBig = getValue(5000);

valuerBig.next().value; → 25000000
valuerBig.next().value;
Uncaught Error: Value is too big!
*/
function* getValue(number) {
    yield number ** 2;
    yield number ** 3;
    yield number ** 4;
    return;
}

const valuer = getValue(1000);
for (let value of valuer) {
    if (value >= 1000000000) { valuer.throw('Error: Value is too big!'); }
}
// valuer.next().value;
/* 2. Создать бесконечный генератор, который должен показывать текущее количество секунд (использовать Date), 
округленное вниз до десяти:
- 5 сек → 0;          - 22 сек → 20;          - 51 сек → 50;
- 15 cек → 10;      - 45 сек → 40;          - 58 сек → 50;
 function* createSeconds() { … }
const getSec = createSeconds();
getSec.next().value; → 0
getSec.next().value; → 10
getSec.next().value; → 10
getSec.next().value; → 20
...
*/

function* createSeconds() {
    while (true) {
        const date = new Date();
        const sec = date.getSeconds();
        yield Math.floor(sec / 10) * 10;
    }
}
const getSec = createSeconds();
console.log(getSec.next().value);