var exp = require('../power.js');

describe('Power Tests', function() {

	it('should return a number', function() {
		var type = exp.power(2, 0);
		expect(typeof type).toEqual("number");
	});

	it('should return the correct answer', function() {
		expect(exp.power(2, 0)).toEqual(1);
		expect(exp.power(2, 1)).toEqual(2);
		expect(exp.power(2, 2)).toEqual(4);
		expect(exp.power(2, -1)).toEqual(undefined);
		expect(exp.power(3, 3)).toEqual(27);
		expect(exp.power(9, 9)).toEqual(387420489);
	});

	it('should return the correct answer', function() {
		expect(exp.powerI(2, 0)).toEqual(1);
		expect(exp.powerI(2, 1)).toEqual(2);
	});

});