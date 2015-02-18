function Consecutive(arr) { 

  arr = arr.filter(function(e, i) {
  	return arr.indexOf(e) == i;
  });  
  
  arr = arr.sort(function(a, b) {
  	return a-b;
  });
 
  numElem = (arr[arr.length-1] - arr[0]) + 1;
  diff = numElem - arr.length;
  
  return diff; 
         
}