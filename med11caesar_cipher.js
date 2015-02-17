function CaesarCipher(str,num) { 
  
  var finalArr = [];
  var convert = [];
  var ground = 0;
  var shift = num%26;
 
  strArr = str.split(""); 
  
  for(var i = 0; i < strArr.length; i++) {
   
      convert = strArr[i].toString().charCodeAt(0);

      if(convert > 64 &&  convert < 91) {
          ground = 64;   	
      }

      if(convert  > 96 && convert  < 123) {
          ground = 97;      	
      }

      if( strArr[i].toString().match(/[^A-Z]/i) != null ) {
          finalArr[i] = strArr[i];

      }else {

          finalArr[i] = (convert + shift - ground)%26 + ground;
          finalArr[i] = String.fromCharCode(finalArr[i]);

      }
    
     
  }
  
  return finalArr.join("")  
  
}