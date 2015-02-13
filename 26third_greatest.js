function ThirdGreatest(strArr) { 

  newArr = [];
  
  for(var i = 0; i < strArr.length; i++) {
  	newArr[i] = {string : strArr[i], length:strArr[i].length};
  }
  
  newArr = newArr.sort(function(a,b) {
  	return b.length - a.length;
  });
  
  return newArr[2].string;
         
}