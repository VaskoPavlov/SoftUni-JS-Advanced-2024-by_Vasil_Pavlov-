import { lookupChar } from "./charLookup";

describe ('Char Lookup', function (){
    it ('1st parameter NOT string and 2nd parameter NOT a number', () => {
        const first = [1,2,3];
        const second = 'abc';
        expect(lookupChar(first, second)).to.be.undefined;
    });
    it ('1st parameter IS string and 2nd parameter NOT a number', () => {
        const first = '123';
        const second = 'abc';
        expect(lookupChar(first, second)).to.be.undefined;
    });
    it ('1st parameter NOT string and 2nd parameter IS a number', () => {
        const first = 12345678;
        const second = 2;
        expect(lookupChar(first, second)).to.be.undefined;
    });
    it ('1st parameter IS string and 2nd parameter IS a number', () => {
        const first ='123';
        const second = 2;
        expect(lookupChar(first, second)).to.equal(first[second]);
    });
    it ('BOTH are correct types but the Number is > string.length', () => {
        const first ='123';
        const second = 5;
        expect(lookupChar(first, second)).to.be.equal('Incorrect index');
    });
    it ('BOTH are correct types but the Number is  a floating point not Integer', () => {
        const first ='123';
        const second = 0.5;
        expect(lookupChar(first, second)).to.be.undefined;
    });
    it ('using negative number BOTH are correct types', () => {
        const first ='123';
        const second = -5;
        expect(lookupChar(first, second)).to.be.equal('Incorrect index');
    });
});