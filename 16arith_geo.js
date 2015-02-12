function ArithGeo(arr) { 

  var arith = arr[1] - arr[0];
  var geo = arr[1] / arr[0] 
  var a=0;
  var g=0;

  for(var i = 1; i < arr.length-1; i++) {
    
    if ( arr[i + 1] - arr[i] == arith ) {  
      a++
    }else if( arr[i + 1] / arr[i] == geo ) {
      g++
    }
  } 
  
  ( a == arr.length-2)? 
      results="Arithmetic": ( g == arr.length-2)? 
        results="Geometric": results = "-1";
   
  return results;
         
}
                        

