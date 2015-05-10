module.exports = {
	fibonacciR: function(x) {
		if(x < 1) {
			return;
		}
		if(x === 1) {
			return 1;
		}
		if(x === 2) {
			return 1;
		}
		return module.exports.fibonacciR(x-1) + module.exports.fibonacciR(x-2)

	},

	fibonacciI: function(x) {
		if(x < 1) {
			return;
		}
	  	var fibNum = 1;
	  	var prev = 1
	  	var temp = 0;
	  	for(var i = 2; i < x; i++) {
	    	temp = fibNum;
	    	fibNum += prev;
	    	prev = temp;
	  	}
	  	return fibNum;
	}


}