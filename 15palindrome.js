function Palindrome(str) { 
  str = str.replace(/\s+/g, "");
  var length = str.length;
  
      
  if (length % 2 != 0) {
    var replace = (str.length - 1) / 2;
    str = str.replace(str[replace], ""); // replaced at first occurrence, not position intended
  }
  
  var firstHalf = str.slice(0, length/2);
  var secondHalf = str.slice( length/2, length).split("").reverse().join("");
  return (firstHalf == secondHalf)? true:false;
        
}
//fix for "dogeeseseegod"

function Palindrome(str) { 
  
  str = str.replace(/\s+/g, "");
  var length = str.length; 
      
  (length % 2 != 0)?  delta = 1: delta = 0;
  
  var firstHalf = str.slice(0, length/2);
  var secondHalf = str.slice( length/2 + delta, length).split("").reverse().join("");
  return (firstHalf == secondHalf)? true:false;
        
}