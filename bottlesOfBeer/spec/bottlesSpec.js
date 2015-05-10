var bottles = require("../bottlesOfBeer.js");

describe("Bottles of Beer Tests", function() {

	xit("should return correct lyrics with x =4", function() {
		expect(bottles.singSong(4)).toEqual("4 bottles of beer on the wall. 4 bottles of beer. Take one down, pass it around. 3 bottles of beer on the wall. 3 bottles of beer on the wall. 3 bottles of beer. Take one down, pass it around. 2 bottles of beer on the wall. 2 bottles of beer on the wall. 2 bottles of beer. Take one down, pass it around. 1 bottle of beer on the wall. 1 bottle of beer on the wall. 1 bottle of beer. Take one down, pass it around. No more bottles of beer on the wall.")
	})
	
})