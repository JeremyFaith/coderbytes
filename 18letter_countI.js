function LetterCountI(str) {
  
    var finalCount = 0;
    var finalWord = "";
    var count;
    
      strArr = str.split(" ");

    for(var i = 0; i < strArr.length; i++) {
      
      word = strArr[i].toLowerCase().split("").sort();
        count = 0;
        for(var j = 0; j < strArr[i].length-1; j++) {
          if (word[j] == word[j+1]) {
              count++;
            }
        }// for j loop
      
        if (count > finalCount) {
          finalCount = count;
            finalWord = strArr[i];
        }
    }// for i loop
    
  return (finalWord == "")? -1:finalWord;
}

LetterCountI(readline()); 
