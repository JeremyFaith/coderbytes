function NumberSearch(str) { 

  numbers = str.match(/[0-9]/g)
  // numbers =  ( str.match(/[0-9]/g) )? str.match(/[0-9]/g):0
  // use to avoid a string with no numbers that results in letters = null 
  // and TypeError: Cannot read property 'map' of null
  letters = str.match(/[a-z]/gi)
 
  numSum = numbers.map(Number).reduce(function(a, b) {
  	return a + b;
  });
  
  return Math.round( numSum / letters.length ); 
         
}