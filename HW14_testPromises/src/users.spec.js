import chai from 'chai';
import sinon from 'sinon';
const { expect } = chai;
import $ from 'jquery';
window.$ = $;

import { showMessage, getDay, getAdultUsers, getRandomUsers, Product, TITLE, PRICE, getUsers, postUser } from './users';
import { money, users } from './constants';

describe('showMessage', function() {
    let alertStub;
    beforeEach(() => {
        alertStub = sinon.stub(window, 'alert');
    });
    afterEach(() => {
        window.alert.restore();
    });
    it('alert should called', () => {
        showMessage();
        expect(alertStub.called).to.be.true;
    });
    xit('alert should show text', () => {
        const testMsg = 'test';
        // showMessage(testMsg);
        expect(alertStub.callsArg(0)).to.equal(testMsg);
    })
});
describe('getDay', function() {
    xit('should return new Date.getDay for getDay', () => {
        expect(getDay()).to.be.an.instanceof(new Date);
        // window.Date().restore();
    })
});
describe('getAdultUsers', function() {
    it('shouldn\'t be undefined for empty arguments', () => expect(getAdultUsers()).not.to.be.undefined);
    it('age should be more than 18', () => {
        expect(getAdultUsers([{ age: 19 }, { age: 13 }])).to.have.length(1);
    })
});

describe('getRandomUsers', function() {
    it('shouldn\'t be undefined for empty arguments', () => expect(getRandomUsers()).not.to.be.undefined);
    it('should !users return false', () => {
        expect(getRandomUsers(undefined)).to.equal(false);
    });
    let stub;

    beforeEach(() => {
        stub = sinon.stub(Math, 'random');
    });
    afterEach(() => {
        Math.random.restore();
    });
    it('if random > 15 should return first part of arr', () => {
        stub = () => 0.5;
        if (stub > 0.5) {
            expect(getRandomUsers([1, 2, 3])).returns([1]);
        }
    });
    it('if random < 15 should return second part of arr', () => {
        stub = () => 0.3;
        if (stub < 0.5) {
            expect(getRandomUsers([1, 2, 3])).returns([3]);
        }
    })
});
describe('getAdultUsers', function() {
    it('shouldn\'t be undefined for empty arguments', () => expect(getAdultUsers()).not.to.be.undefined);
    it('age should be more than 18', () => {
        expect(getAdultUsers([{ age: 19 }, { age: 13 }])).to.have.length(1);
    })
});
describe('Product', function() {
    let product;
    const test = 'test';
    const test2 = 'test2';
    beforeEach(() => product = new Product());
    it('should create instance with title', () => {
        expect(new Product(test).title).to.equal(test);
    });
    it('should create instance with price', () => {
        expect(new Product(test, test2).price).to.equal(test2);
    });
    it('should create instance with default title', () => {
        expect(product.title).to.equal(TITLE);
    });
    it('should create instance with default price', () => {
        expect(product.price).to.equal(PRICE);
    });
    it('should get us a name on getPrice()', () => {
        let allPrice = product.price + money;
        const testVal = 11;
        expect(product.getPrice()).to.equal(allPrice);
    });
    it('should set value if value > 10', () => {
        const testVal = 11;
        product.setPrice(testVal);
        expect(product.value).to.equal(testVal);
    });
    it('should set value if !value', () => {
        const testVal = undefined;
        if (testVal) {
            expect(product.setPrice(testVal)).to.be.an.instanceof(Error);
        };
    });
});

describe('users', () => {
    let stubGet;
    const callStubGet = (data, isError) => {
        if (isError) {
            return stubGet.returns(Promise.reject(data));
        }
        return stubGet.returns(Promise.resolve(data));
    };

    beforeEach(() => {
        // make stub for window.$
        stubGet = sinon.stub(window.$, 'get');
    });

    afterEach(() => {
        window.$.get.restore();
    });

    it('should call $.get()', () => {
        callStubGet();
        getUsers();
        expect(stubGet.called).to.be.true;
    });

    it('getUsers() should call console.log() on success', (done) => {
        const consoleStub = sinon.stub(console, 'log');

        callStubGet();

        getUsers().then(() => {
            expect(consoleStub.called).to.be.true;
            done();
            consoleStub.restore();
        });
    });
})

describe('users', () => {
    let stubPost;
    const callStubPost = (data, isError) => {
        if (isError) {
            return stubPost.returns(Promise.reject(data));
        }
        return stubPost.returns(Promise.resolve(data));
    };

    beforeEach(() => {
        // make stub for window.$
        stubPost = sinon.stub(window.$, 'post');
    });

    afterEach(() => {
        window.$.post.restore();
    });

    it('should call $.post()', () => {
        callStubPost();
        postUser();
        expect(stubPost.called).to.be.true;
    });

    it('postUsers() should call console.log() on success', (done) => {
        const consoleStub = sinon.stub(console, 'log');

        callStubPost();

        postUser().then(() => {
            expect(consoleStub.called).to.be.true;
            done();
            consoleStub.restore();
        });
    });
    xit('postUsers should call console.log() with arguments', (done) => {
        const consoleStub = sinon.stub(console, 'log');
        const testString = 'test';
        callStubPost(testString);
        postUser(() => {
            expect(consoleStub.callStubPost(0).args[0]).to.equal(testString);
            done();
            consoleStub.restore();

        });
    });
})