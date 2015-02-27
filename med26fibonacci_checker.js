function FibonacciChecker(num) { 

  fib = [];
  fib[0] = 0;
  fib[1] = 1;
  fib[2] = 1;
  i = 2;
  while(fib[i] < num) {
  	i++;
    fib[i] = fib[i-1] + fib[i-2];
    if (fib[i] == num) { return "yes"; }
  }
  
  return "no"; 
         
}

******* The one below is what I submitted *******
function FibonacciChecker(num) { 

  F = [];
  F[0] = 0;
  F[1] = 1; 

  function fibo(i) {
    
    F[i] = F[i - 1] + F[i - 2];
    if (F[i] > num) { return "no"; } 
    if (F[i] == num) {
      return "yes";
    }else {
      i++;
        return fibo(i);
    } 
  }
    return fibo(2);     
}