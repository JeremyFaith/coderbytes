function SwapCase(str) { 

  var strArr = str.split("");
  
  newArr = strArr.map(function(e) {
  		if(e.charCodeAt(0) > 64 && e.charCodeAt(0) < 91) {
  			return e.toLowerCase();
        }else if (e.charCodeAt(0) > 96 && e.charCodeAt(0) < 123) {
        	return e.toUpperCase();
        }else { return e;}
  });
    
  return newArr.join(""); 
         
}