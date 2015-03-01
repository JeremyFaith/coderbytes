function MultipleBrackets(str) {

  if( str.match(/^[a-z]*\)/) || str.match(/\([a-z]*$/) ) { return 0; }
  if( str.match(/^[a-z]*\]/) || str.match(/\[[a-z]*$/) ) { return 0; }

  parenthPos = [0];
  bracketPos = [0];
  parenthCount = 0;
  bracketCount = 0;
  parenthTotal = 0;
  bracketTotal = 0;
  
  strArr = str.split("");

  for(var i = 0; i < strArr.length; i++) {
  	if(strArr[i] == "(") { parenthPos.push(i); parenthCount += 1;}
    if(strArr[i] == ")" && i > parenthPos[parenthPos.length - 1]) { 
    	//add condition to check for [ or ] between (--)
      parenthCount -= 1
      parenthTotal += 1;
      parenthPos.pop();
    }
  }// for i loop
  
  if (parenthCount != 0) { return 0;}
  
    for(var j = 0; j < strArr.length; j++) {
  	if(strArr[j] == "[") { bracketPos.push(j); bracketCount += 1;}
    if(strArr[j] == "]" && j > bracketPos[bracketPos.length - 1]) { 
    	//add condition to check for ( or ) between [--]
      bracketCount -= 1
      bracketTotal += 1;
      bracketPos.pop();
    }
  }// for j loop
  
  if (bracketCount != 0) { return 0; }
  
  return (parenthTotal+bracketTotal == 0)? 1:1 + " " + (parenthTotal+bracketTotal);
         
}

//  When the input was "the co[l][]or re(d))()(()" your output was incorrect.