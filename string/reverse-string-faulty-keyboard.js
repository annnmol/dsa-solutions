/**
 * @problem https://leetcode.com/problems/faulty-keyboard/description/
 * @param {string} s
 * @return {string}
 */
function revString(s) {
  let arr = s.split("");
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    const temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
    left++;
    right--;
  }
  return arr.join("");
}
var solution = function (s) {
  let temp = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "i") {
      const rev = revString(temp);
      temp = rev;
    } else {
      temp += s[i];
    }
  }
  return temp;

  //  let arr = [];

  // for (const char of s) {
  //     if (char === 'i') {
  //         arr.reverse();
  //     } else {
  //         arr.push(char)
  //     }
  // }

  // return arr.join('');
};

// ✅ Example usage
console.log(solution(["h", "e", "l", "l", "o"])); // ["o","l","l","e","h"]
console.log(solution(["H", "a", "n", "n", "a", "h"])); //["h","a","n","n","a","H"]
console.log(solution([])); // []
