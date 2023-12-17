/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

isPalindrome('Able, was I ere I saw Elba!');
function isPalindrome(str) {
  str = str.toLowerCase();
  let pureStr = "";
  //string purification: filterout all spaces, and punctuations
  for (let i=0; i<str.length; i++) {
    let char =  str.charAt(i);
    if (char !== ' ' && char !== ',' && char !== '!' && char !== '?' && char !== '.') {
      pureStr+= char;
    }
  }
  console.log(pureStr)

  if (pureStr.length <= 1) {
    return true;
  }

  let j = pureStr.length - 1;
  let i = 0;
  
  while (i<j) {
    if (pureStr[i] !== pureStr[j]) {
      return false;
    }
    i++;j--;
  }
  return true;
}

module.exports = isPalindrome;
