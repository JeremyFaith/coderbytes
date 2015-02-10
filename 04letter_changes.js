function LetterChanges(str) { 

    str = str.toLowerCase();
      
    for (var i=0; i < str.length; i++) {
        
        if (str.charCodeAt(i) < 97 || str.charCodeAt(i) > 122) {
          x = String.fromCharCode(str.charCodeAt(i));
        }else if (str.charCodeAt(i) == 122) {
          x = String.fromCharCode(str.charCodeAt(i)-25);
        }else {
          x = String.fromCharCode(str.charCodeAt(i)+1);
        }
        
       if ( (/^[aeiou]$/i).test(x) ) {x = x.toUpperCase()};
        
       str = str.substr(0, i) + x + str.substr(i + 1);
     
    } 
      
  return str; 
         
}
                         
                      