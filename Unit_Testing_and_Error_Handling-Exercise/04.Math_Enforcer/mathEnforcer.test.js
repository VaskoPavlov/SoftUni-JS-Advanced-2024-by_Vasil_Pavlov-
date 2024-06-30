import { mathEnforcer } from "./mathEnforcer.js";

describe ('Math Enforcer', function (){
    describe ('addFive', function (){
        it ('addFive to valid number', () =>{
            const num = 10;
            expect(mathEnforcer.addFive(num)).to.equal(15);
        });
        it ('addFive to 0', () =>{
            const num = 0;
            expect(mathEnforcer.addFive(num)).to.equal(5);
        });
        it ('addFive to LARGE num', () =>{
            const num = 999999;
            expect(mathEnforcer.addFive(num)).to.equal(1000004);
        });
        it ('addFive to NEGATIVE LARGE num', () =>{
            const num = -999999;
            expect(mathEnforcer.addFive(num)).to.equal(-999994);
        });
        it ('addFive to valid NEGATIVE number', () =>{
            const num = -10;
            expect(mathEnforcer.addFive(num)).to.equal(-5);
        });
        it ('addFive to valid Floating number', () =>{
            const num = 0.1;
            expect(mathEnforcer.addFive(num)).to.be.closeTo(5.1, 0.01);
        });
        it ('addFive to valid Floating number', () =>{
            const num = -0.1;
            expect(mathEnforcer.addFive(num)).to.be.closeTo(4.9, 0.01);
        });
        it ('addFive INvalid number', () =>{
            const num = 'abc';
            expect(mathEnforcer.addFive(num)).to.be.undefined;
        });
        it ('addFive to no input', () =>{
            expect(mathEnforcer.addFive()).to.be.undefined;
        });
    });
    describe ('subtractTen', function (){
        it ('subtractTen to valid number', () =>{
            const num = 10;
            expect(mathEnforcer.subtractTen(num)).to.equal(0);
        });
        it ('subtractTen to valid number', () =>{
            const num = 10.5;
            expect(mathEnforcer.subtractTen(num)).to.equal(0.5);
        });
        it ('subtractTen to 0', () =>{
            const num = 0;
            expect(mathEnforcer.subtractTen(num)).to.equal(-10);
        });
        it ('subtractTen to LARGE num', () =>{
            const num = 999999;
            expect(mathEnforcer.subtractTen(num)).to.equal(999989);
        });
        it ('subtractTen to NEGATIVE LARGE num', () =>{
            const num = -999999;
            expect(mathEnforcer.subtractTen(num)).to.equal(-1000009);
        });
        it ('subtractTen to valid NEGATIVE number', () =>{
            const num = -10;
            expect(mathEnforcer.subtractTen(num)).to.equal(-20);
        });
        it ('subtractTen to valid Floating number', () =>{
            const num = 0.1;
            expect(mathEnforcer.subtractTen(num)).to.be.closeTo(-9.9, 0.01);
        });
        it ('subtractTen to valid Floating number', () =>{
            const num = 18.5;
            expect(mathEnforcer.subtractTen(num)).to.be.closeTo(8.5, 0.01);
        });
        it ('subtractTen INvalid number', () =>{
            const num = 'abc';
            expect(mathEnforcer.subtractTen(num)).to.be.undefined;
        });
        it ('subtractTen to no input', () =>{
            expect(mathEnforcer.subtractTen()).to.be.undefined;
        });
    });
    describe ('sum', function (){
        it ('sum to valid number', () =>{
            const num = 10;
            const secNum = 2;
            expect(mathEnforcer.sum(num, secNum)).to.equal(12);
        });
        it ('sum to two 0', () =>{
            const num = 0;
            const secNum = 0;
            expect(mathEnforcer.sum(num, secNum)).to.equal(0);
        });
        it ('sum to two LARGE nums and 1 is NEGATIVE', () =>{
            const num = 999999;
            const secNum = -999999;
            expect(mathEnforcer.sum(num, secNum)).to.equal(0);
        });
        it ('sum to two LARGE nums', () =>{
            const num = 999999;
            const secNum = 999999;
            expect(mathEnforcer.sum(num, secNum)).to.equal(1999998);
        });
        it ('sum to two NEGATIVE LARGE num', () =>{
            const num = -999999;
            const secNum = -999999;
            expect(mathEnforcer.sum(num, secNum)).to.equal(-1999998);
        });
        it ('sum to valid NEGATIVE first number', () =>{
            const num = -10;
            const secNum = 2;
            expect(mathEnforcer.sum(num, secNum)).to.equal(-8);
        });
        it ('sum to valid NEGATIVE second number', () =>{
            const num = 10;
            const secNum = -2;
            expect(mathEnforcer.sum(num, secNum)).to.equal(8);
        });
        it ('sum to valid 2 NEGATIVE second number', () =>{
            const num = -10;
            const secNum = -2;
            expect(mathEnforcer.sum(num, secNum)).to.equal(-12);
        });
        it ('sum to valid Floating number', () =>{
            const num = 0.1;
            const secNum = 2;
            expect(mathEnforcer.sum(num, secNum)).to.be.closeTo(2.1, 0.01);
        });
        it ('sum to valid Floating number', () =>{
            const num = 0.1;
            const secNum = -2.1;
            expect(mathEnforcer.sum(num, secNum)).to.be.closeTo(-2, 0.01);
        });
        it ('sum to valid Floating number', () =>{
            const num = 8;
            const secNum = 2.1;
            expect(mathEnforcer.sum(num, secNum)).to.be.closeTo(10.1, 0.01);
        });
        it ('sum INvalid number', () =>{
            const num = 'abc';
            const secNum = 2;
            expect(mathEnforcer.sum(num, secNum)).to.be.undefined;
        });
        it ('sum INvalid number', () =>{
            const num = 8;
            const secNum = 'abc';
            expect(mathEnforcer.sum(num, secNum)).to.be.undefined;
        });
        it ('sum 2 INvalid number', () =>{
            const num = 'abc';
            const secNum = 'abc';
            expect(mathEnforcer.sum(num, secNum)).to.be.undefined;
        });
        it ('sum 2 INvalid number', () =>{
            expect(mathEnforcer.sum()).to.be.undefined;
        });
    });
});