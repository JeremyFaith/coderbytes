function DashInsert(str) { 

  var newArr = [];
  
  var strArr = str.toString().split("");
  
  for(var i = 0; i < strArr.length - 1; i++) {
    newArr.push(strArr[i]);
    if (strArr[i] % 2 != 0 && strArr[i + 1] % 2 != 0) {
      newArr.push("-")
    }
  }
  newArr.push(strArr[strArr.length - 1]);
     
  return newArr.join("");
}