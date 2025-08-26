/**
 * @problem https://leetcode.com/problems/reverse-vowels-of-a-string/description/
 * @param {string} s
 * @return {string}
 */

var solution = function (s) {
  const constants = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let vowels = [];
  let modifiedString = [];
  for (const i of s) {
    if (constants.includes(i)) {
      vowels.push(i);
      modifiedString.push("*");
    } else {
      modifiedString.push(i);
    }
  }
  const reversedVowels = vowels.reverse();
  let res = [];
  let index = 0;
  for (const i of modifiedString) {
    if (i === "*") {
      res.push(reversedVowels[index]);
      index++;
    } else {
      res.push(i);
    }
  }
  return res.join("");
};

// ✅ Example usage
console.log(solution("IceCreAm")); // AceCreIm
console.log(solution("leetcode")); //leotcede
