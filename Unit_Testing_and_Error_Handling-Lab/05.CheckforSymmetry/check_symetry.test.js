import { isSymmetric } from "./check_symetry.js";

describe ('Symmetric check', function (){
    it ('symmetric with odd quantity of whole numbers ', () =>{
        const arr = [1,2,3,2,1];
        expect(isSymmetric(arr)).to.be.true;
    });
    it ('symmetric with floating point numbers', () =>{
        const arr = [0.1,0.2,0.2,0.1];
        expect(isSymmetric(arr)).to.be.true;
    });
    it ('symmetric with of whole numbers ', () =>{
        const arr = [1,2,2,1];
        expect(isSymmetric(arr)).to.be.true;
    });
    it ('symmetric with of whole numbers and a string', () =>{
        const arr = [1,2,2,'1'];
        expect(isSymmetric(arr)).to.be.false;
    });
    it ('not be symemtric', () =>{
        const arr = [1,2,3];
        expect(isSymmetric(arr)).to.be.false;
    });
    it ('not be symemtric with no array argument', () =>{
        const data = 123;
        expect(isSymmetric(data)).to.be.false;
    });
    it ('not be symemtric with array like argument', () =>{
        const data = '12321';
        expect(isSymmetric(data)).to.be.false;
    });
});