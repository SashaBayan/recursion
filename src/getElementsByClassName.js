var getElementsByClassName = function(className){
  var result = [];
  function checkNodes(node){
    var children = node.childNodes;
  	if(node.classList !== undefined){	
      for (var i = 0; i < node.classList.length; i++) {
  	    if(node.classList[i] === className){
  	  	  result.push(node);
  		}
  	  };
  	}
  	if(children){
  	  for (var i = 0; i < children.length; i++) {
  	    checkNodes(children[i]);
  	  };
  	}
  }
  checkNodes(document.body)
  return result;
};