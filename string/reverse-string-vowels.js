/**
 * @problem https://leetcode.com/problems/reverse-vowels-of-a-string/description/
 * @param {string} s
 * @return {string}
 */

var solution = function (s) {
  // const constants = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  // let vowels = [];
  // let modifiedString = [];
  // for (const i of s) {
  //   if (constants.includes(i)) {
  //     vowels.push(i);
  //     modifiedString.push("*");
  //   } else {
  //     modifiedString.push(i);
  //   }
  // }
  // const reversedVowels = vowels.reverse();
  // let res = [];
  // let index = 0;
  // for (const i of modifiedString) {
  //   if (i === "*") {
  //     res.push(reversedVowels[index]);
  //     index++;
  //   } else {
  //     res.push(i);
  //   }
  // }
  // return res.join("");
  let vowels = new Set(["a","e","i","o","u","A","E","I","O","U"]);
  let arr = s.split("");
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    while (left < right && !vowels.has(arr[left])) {
      left++;
    }
    while (left < right && !vowels.has(arr[right])) {
      right--;
    }
    if (left < right) {
      let temp = arr[left];
      arr[left] = arr[right];
      arr[right] = temp;
      left++;
      right--;
    }
  }
  return arr.join("");
};

// ✅ Example usage
console.log(solution("IceCreAm")); // AceCreIm
console.log(solution("leetcode")); //leotcede
