function MostFreeTime(strArr) { 
  
  time  = [];
  delta = [];
  
  for(var i = 0; i < strArr.length; i++) {
    timeAdj = 0;
    first   = parseInt( strArr[i].slice(0,2) );
    second  = parseInt( strArr[i].slice(8,10) );
    minute1 = parseInt( strArr[i].slice(3,5) );
    minute2 = parseInt( strArr[i].slice(11,13) );
    
    if(strArr[i].slice(5,7) == "PM" &&  first != 12){
     timeAdj = (12*60); 
    }
    
    time.push( timeAdj + first*60 + minute1 ); 
    timeAdj = 0;
    
    if(strArr[i].slice(13,15) == "PM" && second != 12) {
      timeAdj = (12*60);      
    }
    
    time.push( timeAdj + second*60 + minute2); 
    
  }// for i loop
  
  time = time.sort(function(a, b) { return a - b; });

  for(var j = 2; j < time.length; j = j + 2) {
    delta.push( time[j] - time[j-1] );
  }
  
  num  = delta.sort(function(a, b) { return a - b; })[delta.length-1];
  hour = ( "0" + Math.floor(num/60) ).slice(-2);
  min  = ( "0" + (num - hour*60) ).slice(-2);
  
  return hour + ":" + min;
   
}
