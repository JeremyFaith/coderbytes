function DashInsert(str) { 

  var newstr = [];
  
  str = str.toString().split("");
  
  for(var i = 0; i < str.length - 1; i++) {
    newstr.push(str[i]);
  	if (str[i] % 2 != 0 && str[i + 1] % 2 != 0) {
    	newstr.push("-")
    }
  }
  newstr.push(str[str.length - 1]);
     
  return newstr.join("");
}