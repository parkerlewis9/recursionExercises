var fib = require('../fibSequence.js');

describe('Fibonacci Tests', function() {
	it('should return number at given index', function() {
		expect(fib.fibonacciR(1)).toEqual(1);
		expect(fib.fibonacciR(2)).toEqual(1);
		expect(fib.fibonacciR(5)).toEqual(5);
		expect(fib.fibonacciR(10)).toEqual(55);
		expect(fib.fibonacciR(0)).toEqual(undefined);
	});

	it('should return number at given index', function() {
		expect(fib.fibonacciI(1)).toEqual(1);
		expect(fib.fibonacciI(2)).toEqual(1);
		expect(fib.fibonacciI(5)).toEqual(5);
		expect(fib.fibonacciI(10)).toEqual(55);
		expect(fib.fibonacciI(0)).toEqual(undefined);
	});
});