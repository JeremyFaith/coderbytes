function SimpleMode(arr) { 

  var mode = 0;
  var currentCount = 0;
  var noMatch = true;
  arr = arr.reverse();
 
  for(var i = 0; i < arr.length+1; i++) {
    
    testNumber = arr.pop();
    
    matchCount = arr.filter(function(e) {
      return e == testNumber;
    }).length+1;
    
	if(matchCount != 1) { noMatch = false;}
  
    if(matchCount > currentCount) { 
     	mode = testNumber; 
    	currentCount = matchCount;
    } 
    
  }//for i loop

  return (noMatch)? -1:mode;
         
}