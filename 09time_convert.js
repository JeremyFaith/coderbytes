function TimeConvert(num) { 

  var hour = Math.floor(num/60);
  var min = num - hour*60
  
  return hour + ":" + min; 
         
}