

function reverseString(string, reverse = "", i = string.length - 1) {
  // Your code here
  if (typeof string !== "string") throw TypeError("TypeError")
  if (i < 0) return reverse;
  reverse += string[i]
  return reverseString(string, reverse, i - 1)

};

// try {
//   reverseString(4)
// } catch (e) {
//   console.log(e.message)
// }

module.exports = reverseString
