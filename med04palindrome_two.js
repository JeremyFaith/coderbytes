function PalindromeTwo(str) { 

  str = str.replace(/\s+/g, "");
  str = str.toLowerCase().replace(/[^a-z]/g, "");
  
  var length = str.length; 
      
  (length % 2 != 0)?  delta = 1: delta = 0;
  
  var firstHalf = str.slice(0, length/2);
  var secondHalf = str.slice( length/2 + delta, length).split("").reverse().join("");
  
  return (firstHalf == secondHalf)? true:false;
           
}