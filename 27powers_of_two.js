function PowersofTwo(num) { 
  
  if (num == 1) {return false;}
                 
  while (num % 2 == 0) {
  	num /= 2;
  } 
  
  return (num == 1)? true:false;
       
}