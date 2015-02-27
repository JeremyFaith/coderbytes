function CoinDeterminer(num) { 

  if (num < 5) { return num; }

  numberArr  = [];
  countArr   = [1,5,7,9,11];
 
  for(var i = 4; i >= 0; i--) {
   
    test = true;
    
    while (test) {
        temp =num
        if (num >= countArr[i]) {

            temp = num - countArr[i];

            if (temp < 5 && temp > 1) {
                test = false;           
                temp = num;
            }else { numberArr.push(countArr[i]); }

        }else { test = false; temp = num; }

        num = temp;
    }// while loop
  }// for i loop
   
  return numberArr.length; 
         
}