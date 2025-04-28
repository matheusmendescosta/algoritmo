//algorithm to check if a string is a palindrome

function isPalindrome(str) {
  // Remove non-alphanumeric characters and convert to lowercase
  const cleanedStr = str.replace(/[^a-z0-9]/gi, "").toLowerCase();

  // Check if the cleaned string is equal to its reverse
  return cleanedStr === cleanedStr.split("").reverse().join("");
}

// Example usage
console.log(isPalindrome("Eve saw Diamond, erred. No maid was Eve"));