function DistinctList(arr) { 
    
  newArr = [];
  countArr = [];
  
    for(var i = 0; i < arr.length; i++) {
      
      newArr = arr.filter(function(e) {
          return e == arr[i] && arr.indexOf(e) == i;
      });
      
      newArr.pop()
      
      if (newArr.length != 0) {
        countArr = countArr.concat(newArr)
      }
     
    }
  
  return countArr.length; 
         
}