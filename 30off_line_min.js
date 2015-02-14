function OffLineMinimum(strArr) { 
  temp = [];
  finalArr = [];
  
  num = strArr.toString().split("E").length - 1; 
  // like match better but slower performance (not in these small arrays)
  // num = strArr.toString().match(/E/g).length;
  for(var i = 0; i < num; i++) {
    
   	   j=0;
       while (strArr[j] != "E" && j != strArr.length) {
          temp.push(strArr[j]);
         j+=1;
      }

      temp.sort(function(a,b) { return b-a });
      finalArr.push(temp.pop());
      strArr = strArr.slice( j+1 , strArr.length);
    
 }
 
    return finalArr.join(",");     
}
