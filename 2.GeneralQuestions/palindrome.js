function isPalindrome(string) {
    const lowerCasedString = string.toLowerCase();
    return lowerCasedString === lowerCasedString.split('').reverse().join('');
  }
  
 
  console.log(isPalindrome("level")); // Output: true
  console.log(isPalindrome("hello")); // Output: false
  



  

