function SecondGreatLow(arr) { 

  if (arr.length == 2 && arr[0] == arr[1]) { return arr.join(" ");} 
 
  arr = arr.sort(function(a,b) {
    return a-b;
  }); 
  
  arr = arr.filter(function(e, i, arr) {
    return arr.indexOf(e) == i;
  });
  
  if (arr.length == 2 && arr[0] != arr[1]) {return arr.reverse().join(" ");}
  
  arr = arr.slice(1, arr.length - 1);

  if (arr.length == 1) { arr = [ arr[0], arr[0] ]; return arr.join(" ");}
  
  return arr = [arr[0], arr[arr.length-1]].join(" ");
       
} 

