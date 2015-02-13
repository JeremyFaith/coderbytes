function NumberAddition(str) { 
	
  str = str.split(/[a-zA-Z\W]/); 
  
  str = str.filter(function(e) {
  	return e != "";
  });
  
  if(str == '') {return 0}
  
  str = str.reduce(function(first, second) {
  	return parseInt(first) + parseInt(second);
  });

  return str;   
}

// Could have used for loop but
// I really liked this one using regex 
// and methods.