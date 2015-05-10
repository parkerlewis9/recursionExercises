module.exports = {

	power: function(x, n) {
		if (n < 0) {
			return;
		}
		if (n === 0) {
			return 1;
		} 
		if (n === 1) {
			return x;
		}
		return x * module.exports.power(x, n-1);

	},

	powerI: function(x,n) {
		total = 1; 
		for (var i = 0; i < n; i++) {
			total = total * x;
		}
		return total;
	}

}