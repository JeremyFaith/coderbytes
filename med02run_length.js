function RunLength(str) { 
  
  var count = 1;
  var newStr = [];
  
  for(var i = 0; i < str.length ; i++) {
  
    if (str[i] == str[i + 1]) {
    	count += 1;
    }else {
    	newStr.push(count + str[i]);
      	count = 1;
    }
  }
  return newStr.join(""); 
         
}