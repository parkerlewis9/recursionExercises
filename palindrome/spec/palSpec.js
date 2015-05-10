var pal = require('../palindrome.js');

describe("Palindrome Tests", function() {
	it("should return true for palindromes and false otherwise", function() {
		expect(pal.palindromeI("dog")).toEqual(false);
		expect(pal.palindromeI("bob")).toEqual(true);
		expect(pal.palindromeI("racecar")).toEqual(true);

	});
	it("should return true for palindromes and false otherwise", function() {
		expect(pal.palindromeR("dog")).toEqual(false);
		expect(pal.palindromeR("bob")).toEqual(true);
		// expect(pal.palindromeR("racecar")).toEqual(true);

	});

});