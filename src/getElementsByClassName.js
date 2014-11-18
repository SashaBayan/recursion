var getElementsByClassName = function(className){
  var result = [];
  var children = document.body.childNodes
    if(document.body.className === className){
	  result.push(document.body)
	}  
    for (var i = 0; i < children.length; i++) {
	  if (children[i].classList !== undefined) {
	    for (var j = 0; j < children[i].classList.length; j++) {
  		  if(children[i].classList[j] === className){
		    result.push(children[i])
  		  }
		}
	  };
	};
  return result;
};

//You should use document.body, element.childNodes, and element.classList

//  if(hasChildNodes() === true){
	//check to see if those children have the specified class... aka use recursion
//}
//  .className
//	.classList

//way to check if there's a class name... "class list"
	//if class list contains target class name, you can push it to an array
	// use the built-in .contains method that html elements have
	//iterate through the children of the body
		//check to see if that child has children... if so, iterate through those #recursion
	//inner function to search through the children...

//1. chck for body classname
//2. inner function that takes in a element or node

//how do i target the DOM node itself in order to check if it has a class?
// what DOM nodes am i checking?