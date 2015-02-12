function CountingMinutesI(str) { 

  var timeDiff = 0;
  var timeFactor = 0;
  
  newstr = str.split("-");
  
  first = newstr[0].slice(0, newstr[0].length - 2);
  first = first.split(":");
  first = first.concat( newstr[0].slice(newstr[0].length - 2, newstr[0].length) );
  
  second = newstr[1].slice(0, newstr[1].length - 2);
  second = second.split(":");
  second = second.concat( newstr[1].slice(newstr[1].length - 2, newstr[1].length) );
  
  timeDiff = (second[0] - first[0])*60 + (second[1] - first[1]);
  
   if (timeDiff == 0) {
  	if (first[2] == second[2]) {
    	timeFactor = 0;
    }else {
    	timeFactor = 720;
    }
   }
    
  if (timeDiff > 0) {
  	if (first[2] == second[2]) {
    	timeFactor = 0;
    }else {
    	timeFactor = 720;
    }
  }
  
   if (timeDiff < 0) {
  	if (first[2] == second[2]) {
    	timeFactor = 1440;
    }else {
    	timeFactor = 720;
    }
  }
  
  return timeDiff + timeFactor;
           
}

  //timeFirst = (/pm/).test(newstr[0])? 60*24: 0   did not use but 
  //timeSecond = (/pm/).test(newstr[1])? 60*24: 0  like using this pattern

  // messy with the seperation of string 
  // redo with two function 
  // 1 to seperate string
  // 2 to replace three main if statements