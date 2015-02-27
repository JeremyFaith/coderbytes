function ArrayAddition(arr) { 

  pascalArr = [];
  
  arr = arr.sort(function(a, b) {
    return a - b;
  });

  highNum = arr.pop();
  sum = arr.reduce(function(a, b) { return a + b;});
  
  if (sum < highNum) { return false; }
  
  pascal(arr);
 
  for(var i = 0; i < pascalArr.length; i++) {
    if(pascalArr[i] == highNum) { return true; }
  }
 
  return false;
  
  function pascal(arr) {
 
    for(var i = 0; i < arr.length; i++) {
    	temp = pascalArr.map(function(e) { return e+arr[i]; });    
      	pascalArr = pascalArr.concat(temp);
      	pascalArr.push(arr[i]);     
    }
   
  }
         
}