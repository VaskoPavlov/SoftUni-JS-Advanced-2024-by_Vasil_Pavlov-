import { createCalculator } from "./add&subtract.js";

describe('add and subtract checker', function () {
    it('can add numbers', () => {
        const calc = createCalculator();
        calc.add(1);
        calc.add(2);
        expect(calc.get()).to.equal(3);
    });

    it('can subtract numbers', () => {
        const calc = createCalculator();
        calc.subtract(2);
        calc.subtract(1);
        calc.subtract(1);
        expect(calc.get()).to.equal(-4);
    });

    it('can add and subtract numbers', () => {
        const calc = createCalculator();
        calc.add(2);
        calc.subtract(1);
        expect(calc.get()).to.equal(1);
    });

    it('can add and subtract numbers and string as numbers', () => {
        const calc = createCalculator();
        calc.add('2');
        calc.subtract('1');
        calc.add(1);
        expect(calc.get()).to.equal(2);
    });

    it('can subtract numbers and string as numbers', () => {
        const calc = createCalculator();
        calc.subtract('2');
        calc.subtract('1');
        calc.subtract(1);
        expect(calc.get()).to.equal(-4);
    });

    it('returns [0] if given zero value', () => {
        const calc = createCalculator();
        expect(calc.get()).to.equal(0);
    });

    it('returns [0] if no operations are performed', () => {
        const calc = createCalculator();
        expect(calc.get()).to.equal(0);
    });

    it('can handle negative numbers', () => {
        const calc = createCalculator();
        calc.add(-3);
        calc.subtract(-5);
        calc.add('-2');
        expect(calc.get()).to.equal(4);
    });

    it('can handle decimal numbers', () => {
        const calc = createCalculator();
        calc.add(1.5);
        calc.subtract(0.5);
        calc.add('2.5');
        expect(calc.get()).to.equal(3.5);
    });

    it('can handle multiple operations', () => {
        const calc = createCalculator();
        calc.add(5);
        calc.subtract(3);
        calc.add(1);
        calc.subtract('2');
        calc.add(3);
        expect(calc.get()).to.equal(4);
    });
});
