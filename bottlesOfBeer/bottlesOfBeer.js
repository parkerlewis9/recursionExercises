module.exports = {

	singSong: function(x) {
	  for(var i = x; i>2; i--) {
	    console.log(i + " bottles of beer on the wall.\n" + i + " bottles of beer.\nTake one down, pass it around.\n" + (i-1) + " bottles of beer on the wall.")
	  }
	  for(var j = 2; j > 1; j--) {
	    console.log(i + " bottles of beer on the wall.\n" + i + " bottles of beer.\nTake one down, pass it around.\n" + (i-1) + " bottle of beer on the wall.")
	  }
	    console.log(1 + " bottle of beer on the wall.\n" + 1 + " bottle of beer.\nTake one down, pass it around.\n" + "No more bottles of beer on the wall.")
	},

	singSongR: function(x) {
	  if (x === 2) {
	    return x + " bottles of beer on the wall. " + x + " bottles of beer.\nYou take one down, pass it around.\n" + (x-1) + " bottle of beer on the wall.\n" + module.exports.singSongR(x-1)
	  } else if (x === 1) {
	    return x + " bottle of beer on the wall. " + x + " bottle of beer.\nYou take one down, pass it around.\nNo more bottles of beer on the wall."
	  }
	    return x + " bottles of beer on the wall. " + x + " bottles of beer.\nYou take one down, pass it around.\n" + (x-1) + " bottles of beer on the wall.\n" + module.exports.singSongR(x-1)
	},
}

console.log(module.exports.singSongR(3));