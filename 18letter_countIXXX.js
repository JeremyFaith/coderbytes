function LetterCountI(str) { 
  countArr = [];
  sum = [];
  
  strArr = str.toLowerCase().split(" ");
  //return strArr[0][1]
  
  for(var j = 0; j < strArr.length; j++) {
  test = strArr[j].split("")

  for(var i = 0; i < test.length; i++) {
  countArr[i] = test.filter(function(e) {
  	return e == test[i]
  });

  }//for i loop
    //return countArr
    for(var k=0; k<countArr.length; k++) {
    	sum[j] = countArr.filter(function(e) {
        	return e.length > 1;
        });
    }//for k loop
    return sum[0].length
  }//for j loop
  return countArr;
  //return count[0]
}