function CheckNums(num1,num2) { 

  delta = num2 -num1;
  if (delta == 0) return -1;
  return (delta > 0)? true: false; 
         
}