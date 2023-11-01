function isPalindrome(word) {
  const reversedWord = word.split('').reverse().join('');

  if (word === reversedWord){
    return true;
  }
  else{
    return false;
  }

}

/* 
  take an input of a word 

  initialize a variable called reversedWord

  reverse the letters in the word so that the ending letters come first and the beginning letters come last

  compare word and reverseWord - if they deeply equal one another, return true, otherwise return false 
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
