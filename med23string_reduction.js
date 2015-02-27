function StringReduction(str) { 
  
  test = ["a", "b", "c"];
  
  start();
  
  function start() {
    
    for(var i = 0; i < str.length-1 ; i++) {
      
      if (str[i] != str[i+1]) { 
        replaceLetter(str[i], str[i+1], i); 
        start();
      }
      
    }
    
  }// function start() 

  function replaceLetter(alpha1, alpha2, i) {
    
    repl =  test.filter(function(e) {
      return e != alpha1 && e != alpha2;
    }); 

    return str = str.slice(0, i) + repl + str.slice(i+2,str.length);
   
  }// function replaceLetter()
  
  return str.length;
         
}