

var stringifyJSON = function(obj) {

  if(typeof obj === "string"){
	  return '\"' + obj + '\"';
  } else if(obj === null){
      return String(obj); 
  } else if(typeof obj == "number"){
	  return String(obj);
  } else if(typeof obj == "boolean"){
	  return String(obj);
  } else if(obj.constructor === Array){
	  if(obj[0] === undefined){
	      return '[]'
	  } else {
		  var result = [];
		  for (var i = 0; i < obj.length; i++) {
		  result.push(stringifyJSON(obj[i])); 
	  };
	  return '['  + result.join()  + ']' 
      }
  } else if(obj.constructor === Object){
	  var keys = Object.keys(obj);
	  var result = [];
	  if(keys.length === 0){
	      return '{}';
	  } else { 
		  for (var i = 0; i < keys.length; i++) {
		    if(obj[keys[i]] === undefined || typeof obj[keys[i]] === "function"){
			  return '{}'
		  }
		  for (var i = 0; i < keys.length; i++) {
		    result.push(stringifyJSON(keys[i]));
			result.push(':')
			result.push(stringifyJSON(obj[keys[i]]));
			if(i !== keys.length - 1){
			result.push(',');
		    }
	      };
  	  }
  	  return '{'  + result.join('')  + '}' 
  }
  }
};