function PrimeChecker(num) { 
 
  if ( num.toString().match(/^1[0]*$/) != null ) { return 0; }

  real = num.toString().split("");
  
  final = [[real[0]]];
  
  for(var k = 1; k < real.length; k++) {
    
    arr = final;
    final = [];

    for(var j =0; j < arr.length; j++) {

      for(var i = 0; i < arr[0].length+1; i++) {

        temp = arr[j].slice(0,i).concat(real[arr[0].length]).concat((arr[j].slice(i,arr[0].length)));

        final.push(temp);

      }// for i loop

    }// for j loop 
      
  }// for k loop
  
  for(var m = 0; m < final.length; m++) {
    
      current = final[m].join("");

      isPrime = true;

      for(var n = 3; n < current; n = n + 2) {

          if (current % n == 0 || current % 2 == 0) { isPrime = false; }

      }// for n loop

     if (isPrime) { return 1; }
  
  }// for m loop
  
 return 0
  
}