function VowelCount(str) { 
  var x = 0;
  str = str.toLowerCase();
  
  for(var i = 0; i < str.length; i++) {
    if ( (/^[aeiou]$/i).test(str[i]) ) { x++};
  }
  return x; 
         
}