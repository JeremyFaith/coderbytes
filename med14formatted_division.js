function FormattedDivision(num1,num2) { 
  
  number = (num1/num2).toFixed(4);
  number = number.split(".");
  
  before = number[0].toString().replace(/(\d)(?=(\d{3})+$)/g, "$1,");
  after = number[1].toString();
  
  numStr = before + "." + after;
  
  return numStr;
         
}