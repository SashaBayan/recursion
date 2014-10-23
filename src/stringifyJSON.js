// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
	var keys = Object.keys(obj)
	console.log(keys)
	for (var i = 0; i < keys.length; i++) {
		if(keys[i].constructor === String || Boolean || Number){
			return keys[i].toString()
		}
	};
};

//Function above successfully converts Object keys, whether String, Boolean, or Number, \
//to primitive strings. There is redundancy (String does not need to convert to string, I don't think). 
//Also, this is using a for-loop, instead of recursion.

//keys = obj[i], values = obj[keys[i]