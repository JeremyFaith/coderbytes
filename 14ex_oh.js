function ExOh(str) { 

  var x = 0;
  var o = 0;
  
  for(var i = 0; i < str.length; i++) {
    
    if ( (/x/).test(str[i]) ) { x++ };
    if ( (/o/).test(str[i]) ) { o++ };
  }
  
  return ( x == o)? true:false; 
         
}