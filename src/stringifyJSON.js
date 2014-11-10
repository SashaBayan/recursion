

var stringifyJSON = function(obj) {

	if(typeof obj === "string"){
		console.log('stopped at string')
		return '\"' + obj + '\"';

	}
	else if(obj === null){
    console.log('at null')
		return String(obj);
        
	}
	else if(typeof obj == "number"){
    console.log('at number')
		return String(obj);
	}
	else if(typeof obj == "boolean"){
    console.log('at boolean')
		return String(obj);
	}
	else if(obj.constructor === Array){
		console.log('array baybayyy')
		if(obj[0] === undefined){
			return '[]'
		} else {
			var result = [];
			for (var i = 0; i < obj.length; i++) {
				result.push(stringifyJSON(obj[i])); 

			};
			return '['  + result.join()  + ']' 
		}
	} 
	else if(obj.constructor === Object){
		var keys = Object.keys(obj);
		var result = [];
		if(keys.length === 0){
		return '{}';
		} else { 
			for (var i = 0; i < keys.length; i++) {
				if(obj[keys[i]] === undefined || typeof obj[keys[i]] === "function"){
					return '{}'
			};
			for (var i = 0; i < keys.length; i++) {
				result.push(stringifyJSON(keys[i]));
				result.push(':')
				result.push(stringifyJSON(obj[keys[i]]));
				if(i !== keys.length - 1){
				result.push(',')
				;}
			};
		}
		return '{'  + result.join('')  + '}' 
		}
	}
};



//function returning only contents of array not array itself

//keys = keys[i], values = obj[keys[i]]

/*
	var keys = Object.keys(obj)
	for (var i = 0; i < keys.length; i++) {
		if(keys[i].constructor === String || Boolean || Number || Array){
			return keys[i].toString();
		}
	};
*/	