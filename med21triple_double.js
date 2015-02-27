function TripleDouble(num1,num2) { 
  
  matches =[]

  triples =  num1.toString().match(/(\d)\1{2}/g);
  doubles =  num2.toString().match(/(\d)\1/g)
 
  if (triples == null || doubles == null) { return 0; }
  
  for(var i = 0; i < triples.length; i++) {
    
    matches.push( doubles.filter(function(e) {
      return triples[i][0] == e[0][0]}) 
    );
  
   if (matches[i].length > 0) { return 1; }

  }   
  return 0;
}

