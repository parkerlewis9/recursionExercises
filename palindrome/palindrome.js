module.exports = {

	palindromeI: function(string) {
		var newArr = [];
		var splitArr = string.split("");
		for(var i = splitArr.length -1; i >= 0; i--) {
			newArr.push(splitArr[i]);
		};
		var newString = newArr.join("");
		if(newString === string) {
			return true;
		} else {
			return false;
		}

	},

	palindromeR: function(string) {
		 if(string.length === 0) {
		   return true;
		 };
		 if(string.length === 1) {
		   return true;
		 };
		 var arr = string.split('');
		 var front = arr.splice(0, 1);
		 var back = arr.splice((arr.length - 1), 1);
		 var newS = arr.join('');
		 if (front[0] === back[0]) {
		   module.exports.palindromeR(newS);
		 } else {
		   return false;
		 };
		},

}

// This works when using console.log but doesn't 
// pass the test in jasmine. Not sure why that is.
// console.log(module.exports.palindromeI("doood"));