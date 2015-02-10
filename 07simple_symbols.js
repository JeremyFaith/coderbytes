function SimpleSymbols(str) { 

  if (str.length < 3) return false;

  str = str.toLowerCase();
  
  for (var i = 0; i < str.length-1; i = i + 1) {

    if (str.charCodeAt(i) > 96 && str.charCodeAt(i) < 123) {

        if (str.charCodeAt(i-1) == 43 && str.charCodeAt(i+1) == 43) { 
          return true;
        }else {
          return false;
        }
    }
  } 
         
}
  