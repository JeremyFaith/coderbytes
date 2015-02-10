function ABCheck(str) { 

	str = str.toLowerCase().split("");

   	for(var i = 0; i < str.length; i++) {

	    if (str[i] == "a" && (str[i-4] == "b" || str[i+4] == "b")) {
	      return  true
	    }

	}
	
   	return false; 
         
}