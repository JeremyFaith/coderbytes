function LetterCapitalize(str) { 

  var array = [];
  
  for (var i = str.length-1; i >= -1; i--) {

    array[i] = str[i];
    
    if (str[i] == " " || i == -1) {
      array[i+1] = str.charAt(i+1).toUpperCase();
    }
  }
  
  return array.join("");

}
   


 function LetterCapitalize(str) { 

  var array = [];

  for (var i = 0; i < str.length; i++) {

    array[i] = str[i];

    if ( (/\s/).test(str[i])) {
      array[i+1] = str.charAt(i+1).toUpperCase();
      i++
    }
  }
  
  array[0] = array[0].toUpperCase();

  return array.join("");
          
}

 
