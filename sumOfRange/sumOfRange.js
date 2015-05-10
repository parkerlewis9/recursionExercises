module.exports = {
	sumOfRangeR: function(x) {
		  if(x < 0) {
		    return
		  } else if(x === 0) {
		    return 0
		  } else if(x === 1) {
		    return 1;
		  }
		  return x + module.exports.sumOfRangeR(x-1);

	},

	sumOfRange: function(x) {
		if(x < 0) {
			return;
		}
		sum = 0;
		for (var i = x; i > 0; i--) {
			sum += i;
		}
		return sum;

	}


}