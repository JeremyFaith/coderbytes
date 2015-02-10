function LongestWord(sen) { 
  
 var compare = 0;

 var temp = sen.replace(/[^a-z]/gi," ");
 var temp =temp.replace(/(\s)+/, " ").split(" ");
  for (var i = 0; i < temp.length; i++) {
    if ( temp[compare].length < temp[i].length) compare = i;
  }

  return temp[compare];
            
}
