function PermutationStep(num) { 
  
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
  
  test = Math.pow(10,num.toString().length);
  
  for(var m = 0; m < final.length; m++) {
    current = final[m].join("");
    if ( current < test && current > num.toString()) { test = current; }
  }
  
 return ( test == Math.pow(10,num.toString().length) )? -1:test;
  
} 