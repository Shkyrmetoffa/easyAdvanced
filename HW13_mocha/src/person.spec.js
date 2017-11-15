import chai from 'chai';
const { expect } = chai;
import { Person, NAME } from './person';

describe('Person', function() {
    let person;

    beforeEach(() => person = new Person());

    it('should create instance with name', () => {
        const title = 'test';
        expect(new Person(title).name).to.equal(title);
    });
    it('should create instance with default name', () => {
        // expect(person).to.have.own.property('name');
        // expect(person.name).to.exist;
        expect(person.name).to.equal(NAME);
    });
    it('should get us a name on getName()', () => {
        expect(person.getName()).to.equal(person.name);
    });
    it('should get us a name on setName()', () => {
        const testName = 'test';
        person.setName(testName);
        expect(person.name).to.equal(testName);
    });

    it('should return appropriate text on getCreation()', () => {
        const tests = [
            { hour: 23, text: 'night child' }, { hour: 7, text: 'morning child' },
            { hour: 12, text: 'day child' }, { hour: 20, text: 'evening child' }
        ];

        tests.forEach(({ hour, text }) => {
            person.creation.setHours(hour);
            expect(person.getCreation()).to.equal(text);
        });
    });


    it('should create date', () => {
        expect(person.creation).to.be.an.instanceof(Date);
    });
});