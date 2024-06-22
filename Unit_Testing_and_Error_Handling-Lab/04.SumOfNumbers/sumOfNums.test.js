import { sum } from "./sumOfNums.js";
describe ('Testing sum function', function (){
    it('using whole number values',() =>{
        expect(sum([1, 3])).to.equal(4);
    });
    it('using floting point numbers', () =>{
        expect(sum([0.1, 0.2])).to.closeTo(0.3, 0.0000000005);
    });
    it('using strings as numbers', () =>{
        expect(Number(sum(['1', '2']))).to.equal(3);
    });
    it('using strings as numbers and whole numbers', () =>{
        expect(Number(sum(['1', 2]))).to.equal(3);
    });
    it('using strings as numbers and floating point numbers', () =>{
        expect(Number(sum(['1', 0.2]))).to.closeTo(1.2, 0.0000000005);
    });
});