function BinaryConverter(str) { 

  var decArr = [];
  
  strArr = str.split("").reverse();
  
  for(var i = 0; i < strArr.length; i++) {
  	decArr.push(Math.pow(2,i) * strArr[i]);
  }
  
  decAns = decArr.reduce(function(a,b) {
  	return a + b;
  });
  
  return decAns; 
         
}