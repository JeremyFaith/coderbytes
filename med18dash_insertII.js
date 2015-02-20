function DashInsertII(num) { 

  var newArr = [];
  
  var strArr = num.toString().split("");
  
  for(var i = 0; i < strArr.length - 1; i++) {
    newArr.push(strArr[i]);
    if (strArr[i] % 2 != 0 && strArr[i + 1] % 2 != 0) {
      newArr.push("-")
    }
    
    if (strArr[i] % 2 == 0 && strArr[i + 1] % 2 == 0) {
      if (strArr[i] != 0 && strArr[i + 1] != 0) {
        newArr.push("*")
      }
    }
  }
  newArr.push(strArr[strArr.length - 1]);
     
  return newArr.join("");
}
   