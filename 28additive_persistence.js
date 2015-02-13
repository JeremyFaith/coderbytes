function AdditivePersistence(num) { 
  
  var counter = 0;
  num = num.toString().split("");  
  
  while (num.length != 1) {
    
  	num = num.reduce(function(a, b) {
    	return parseInt(a) + parseInt(b);
    });;
    
    num = num.toString().split("");  
    
    counter += 1;
  }
 	
  return counter; 
         
}