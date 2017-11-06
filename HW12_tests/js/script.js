const users = [{ age: 15 }, { age: 14 }, { age: 28 }, { age: 18 }, { age: 45 }, { age: 68 }, { age: 38 }, { age: 22 }, { age: 14 }];

const getDay = () => {
    return new Date().getDay();
};

const getAdultUsers = (users = []) => users.filter(user => user.age > 18);
// является ли передаваемое значение массивом
// что возвращает функция

const getRandomUsers = (users) => {

    const numb = Math.random();
    if (!users) {
        return false;
    }
    const length = users.length;
    const middleUser = Math.round(length / 2);

    if (numb > 0.5) {
        return users.slice(0, middleUser);
    }
    return users.slice(middleUser, length);
};

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
        if (result.length === 5) console.log('Success');
        else console.error(`error`);
    }
}
test.equal(getDay(), 1);
test.defined(getAdultUsers());
test.filter(getAdultUsers(users));
test.defined(getRandomUsers());
test.equal(getRandomUsers(undefined), false);
test.slice(getRandomUsers(users));