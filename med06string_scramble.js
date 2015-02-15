function StringScramble(str1,str2) { 
  
  str1 = str1.replace(/[^a-zA-Z]/g, "");
  
  if (str1.length < str2.length) { return false; }
  
  str1 = str1.toLowerCase().split("");
  str2 = str2.toLowerCase().split("");

  var cut;
 
  for(var i = str1.length-1; i >= 0; i--) {
   
        if (str2.indexOf(str1[i]) >= 0) {

        cut = str2.indexOf(str1[i])
        firstHalf = str2.slice(0, cut);
        secondHalf = str2.slice(cut+1, str2.length);
        str2 = firstHalf.concat(secondHalf);
  
    }
    
    str1.pop();
    
  } 
  
  return (str2.length > 0)? false:true;
         
}