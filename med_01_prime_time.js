function PrimeTime(num) {

	if (num == 2) return true; 
	if ( num % 2 == 0 ) return false;

	for (var i = 3; i < num; i = i + 2) {
		if ( num % i == 0 ) return false;
	}
	  return true; 
         
}