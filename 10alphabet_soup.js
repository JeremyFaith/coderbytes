function AlphabetSoup(str) { 
  
  str = str.toLowerCase().split('').sort().join('');
  return str; 
         
}