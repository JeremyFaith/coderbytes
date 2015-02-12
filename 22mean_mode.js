function MeanMode(arr) { 
  
  var maxCount = [0, 0];
  
  var mean = arr.reduce(function(first, second) {
  	           return first + second;
              }) / arr.length;
  
  for(var i = 0; i < arr.length; i++) {
    var count =0;
  	for(var j = 0; j < arr.length; j++) {
    	if (arr[j] == arr[i]) { count++; }
      	if (maxCount[0] < count) {
        	maxCount[0] = count;
          maxCount[1] = arr[i];
        }
    }
  }
  
  var mode = maxCount[1];

  return (mean == mode)? 1:0; 
         
}