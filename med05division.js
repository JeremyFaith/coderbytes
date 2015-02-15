function Division(num1,num2) { 

  var q; // quotient
  var r; // remainder
  
  while (r != 0) {
  	q = Math.floor(num1 / num2);
    r = num1 - q*num2;
  
    num1 = num2;
    num2 = r;
    
  }

  return num1; // really returning num2 before last loop when r = 0
         
}