function NumberEncoding(str) { 

  var strArr = str.split("");
  
  var newArr = strArr.map(function(e) {
  		if (e.charCodeAt(0) > 64 && e.charCodeAt(0) < 91) {
  			return (e.charCodeAt(0) - 64);
        }else if (e.charCodeAt(0) > 96 && e.charCodeAt(0) < 123) {
        	return (e.charCodeAt(0) - 96);
        }else { return e; }
  });
  
    return newArr.join("");     
}