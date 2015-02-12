function DivisionStringified(num1,num2) { 

  number = Math.round(num1 / num2); 
  
  number = number.toString().replace(/(\d)(?=(\d{3})+$)/g, "$1,");
 
  return number;
         
}

//.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");