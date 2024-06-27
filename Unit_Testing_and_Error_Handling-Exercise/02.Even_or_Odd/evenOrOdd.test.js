import { isOddOrEven } from "./evenOrOdd";

describe ('Odd or even', function (){
    it ('returns undefined if NOT a string', () =>{
        const data = 123
        expect(isOddOrEven(data)).to.be.undefined;
    });
    it ('returns undefined if NOT a string', () =>{
        const data = [1,2,3]
        expect(isOddOrEven(data)).to.be.undefined;
    });
    it ('returns even when length is even', () =>{
        const data = 'data';
        expect(isOddOrEven(data)).to.equal('even')
    });
    it ('returns odd when length is odd', () =>{
        const data = 'dat';
        expect(isOddOrEven(data)).to.equal('odd');
    });
});