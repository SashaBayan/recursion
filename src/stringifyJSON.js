

var stringifyJSON = function(obj) {
	if(typeof obj === "string"){
		return '\"' + obj + '\"';
	}
	if(obj === null){
		return String(obj);
	}
	if(typeof obj == "number" || "boolean"){
		return String(obj);
	}
	if(obj.constructor === Array){
		return String(obj);
	}
	var keys = Object.keys(obj)
	for (var i = 0; i < keys.length; i++) {
		if(keys[i].constructor === String || Boolean || Number || Array){
			return keys[i].toString();
		}
	};
};

//keys = obj[i], values = obj[keys[i]]