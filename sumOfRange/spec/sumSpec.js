var sum = require("../sumOfRange.js");

describe("sumOfRange Tests", function() {

	it("should return a number", function() {
		var type = sum.sumOfRangeR(1)
		expect(typeof type).toEqual("number");
		
	});
	it("should sum of numbers before and including x", function() {
		expect(sum.sumOfRangeR(1)).toEqual(1);
		expect(sum.sumOfRangeR(6)).toEqual(21);
		expect(sum.sumOfRangeR(0)).toEqual(0);
		expect(sum.sumOfRangeR(-1)).toEqual(undefined);

	});

	it("should return a number", function() {
		var type = sum.sumOfRange(1)
		expect(typeof type).toEqual("number");
		
	});
	it("should sum of numbers before and including x", function() {
		expect(sum.sumOfRange(1)).toEqual(1);
		expect(sum.sumOfRange(6)).toEqual(21);
		expect(sum.sumOfRange(0)).toEqual(0);
		expect(sum.sumOfRange(-1)).toEqual(undefined);

	});

});