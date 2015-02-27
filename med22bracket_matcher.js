function BracketMatcher(str) { 

  leftCount  = str.match(/\(/g);
  rightCount = str.match(/\)/g);
  
  if (leftCount == null || rightCount == null) { return 1; }
  
  return (leftCount.length === rightCount.length)? 1:0; 
         
}

// "re(d))()(()"  failed -- did not chech for proper matches


*******************
function BracketMatcher(str) { 

  //leftCount  = str.match(/\([a-z]*\)/g);
  matchSplit = str.split(/\([a-z]*\)/g);
  
  return matchSplit
  newStr = matchSplit.toString().match(/\([a-z,\s]*\)/g);
  
  return (newStr == null)? 0:1
 
  leftCount  = newStr.match(/\(/g);
  rightCount = newStr.match(/\)/g);

  if (leftCount == null || rightCount == null) { return 1; }
  
  return (leftCount.length === rightCount.length)? 1:0; 
         
}