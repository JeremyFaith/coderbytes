function NumberAddition(str) { 
	
  var strArr = str.split(/[a-zA-Z\W]/); 
  
  strArr = strArr.filter(function(e) {
  	return e != "";
  });
  
  if(strArr == '') {return 0}
  
  strArr = strArr.reduce(function(first, second) {
  	return parseInt(first) + parseInt(second);
  });

  return strArr;   
}

// Could have used for loop but
// I really liked this one using regex 
// and methods.