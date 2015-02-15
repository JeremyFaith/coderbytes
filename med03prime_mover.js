function PrimeMover(num) { 

  var primeArr = [];
  
  if (num == 1) { return 2; }
  primeArr.push(2);
 
  for(var i = 3; i < 10000; i = i + 2) {
  
    var primeCheck = primeArr.every(function(e) {
              return i % e != 0;
             });

    if (primeCheck == true) { primeArr.push(i); }
    if (primeArr.length == num) { return i; }
     
  }
         
}