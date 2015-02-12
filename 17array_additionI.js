function ArrayAdditionI(arr) { 
  var sum = 0;
  arr = arr.sort(function(a, b) {
    return a - b;
  });;
  
  for(var j = 1; j < arr.length; j++) {
  
      for(var i = 0; i < arr.length-1; i++) { sum = sum + arr[i];}
      var delta = sum - arr[arr.length-1];
      if ( arr.indexOf(delta) != -1 || delta == 0) {return true;}
      
      arr = arr.slice(0, arr.length-2);
       arr.push(delta);
        
  }
  //return  delta; 
     return arr    
}

// not finished
