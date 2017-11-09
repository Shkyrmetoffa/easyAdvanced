import chai from 'chai';
const { assert, expect } = chai;
import { users, getDay, getAdultUsers, getRandomUsers } from './main';

describe('getDay', function() {
    it('should return new Date.getDay for getDay', () => {
        expect(getDay()).to.equal(new Date().getDay());
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
    it('if random > 15 should return first part of arr', () => {
        const originRandom = Math.random;
        Math.random = () => 0.5;
        if (Math.random > 0.5) {
            expect(getRandomUsers([1, 2, 3])).returns([1]);
        }
        Math.random = originRandom;
    });
    it('if random < 15 should return second part of arr', () => {
        const originRandom = Math.random;
        Math.random = () => 0.3;
        if (Math.random < 0.5) {
            expect(getRandomUsers([1, 2, 3])).returns([3]);
        }
        Math.random = originRandom;
    })
});