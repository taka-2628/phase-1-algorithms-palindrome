function isPalindrome(word) {
  let arr = word.split("")
  let reversedArr = arr.reverse()
  let reversedWord = reversedArr.join("")
  if (word == reversedWord){
    return true;
  } else {
    return false;
  }
}

isPalindrome("racecar")
// => true
isPalindrome("robot")
// => false

/* Add your pseudocode here
  Turn a string (word) into an Array (arr) - .split("")
  Reverse the elements in the Array - .reverse()
  Turn the Array into a string - .join("")
  Use if statement to test if word and reversedWord are ==
    if true, return true
    if false, return false
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
