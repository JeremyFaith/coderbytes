function SwapII(str) { 
 
  temp = str.match(/\d[a-z]+\d/i);            

  if (temp != null) {   
    temp = temp[0].split("");              
    last = temp.length-1;                    
    swap = temp[0];                          
    temp[0] = temp[last];
    temp[last] = swap;
    str = str.replace(/\d[a-z]+\d/i, temp.join(""));
  }
 
  strArr = str.split("");
  
  newArr = strArr.map(function(e) {
      if(e.charCodeAt(0) > 64 && e.charCodeAt(0) < 91) {
        return e.toLowerCase();
        }else if (e.charCodeAt(0) > 96 && e.charCodeAt(0) < 123) {
          return e.toUpperCase();
        }else { return e;}
  });
    
  return newArr.join(""); 
         
}