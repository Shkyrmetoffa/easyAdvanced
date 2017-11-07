const originRandom = Math.random;
Math.random = () => 0.3;

const test = {
    equal(input, result) {
        if (input === result) console.log('Success');
        else console.error(`${input} not equals to ${result}`);
    },
    defined(input) {
        if (input !== undefined) console.log('Success');
        else console.error(`${input} is not defined`);
    },
    filter(arr) {
        if (arr = [28, 45, 68, 38, 22]) console.log('Success');
        else console.error(`${item} isn't equal to 18`);
    },
    slice(result) {
        if (Math.random > 0.5) console.log(`Success ${result} === ${users.slice(0, 5)}`);
        else console.log(`Success ${result} === ${users.slice(5)}`);
    }
}

test.equal(getDay(), new Date().getDay());
test.defined(getAdultUsers());
test.filter(getAdultUsers(users));
test.defined(getRandomUsers());
test.equal(getRandomUsers(undefined), false);
test.slice(getRandomUsers(users));
Math.random = originRandom;