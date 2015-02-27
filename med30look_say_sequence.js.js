function LookSaySequence(num) { 

  finalArr = []; 
  numArr = num.toString().split("");
  
  if (numArr.length == 1) { return 1 + numArr; }

  for(var i = 0; i < numArr.length; i++) {
    count = 1;

    while(numArr[i] == numArr[i + count]) {
      count += 1;
    }
    if (numArr[i] != numArr[i-1]) { push(i, count); }

    function push(i,count) {     
      finalArr.push(count);
      finalArr.push(numArr[i]);  
    }

  }
   
  return finalArr.join("");
  
}