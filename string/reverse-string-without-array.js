/**
 * @problem https://leetcode.com/problems/reverse-string/description/?envType=problem-list-v2&envId=string
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */

var solution = function (s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    const temp = s[left];
    s[left] = s[right];
    s[right] = temp;
    left++;
    right--;
  }
  
  console.log(s);
};

// ✅ Example usage
console.log(solution(["h", "e", "l", "l", "o"])); // ["o","l","l","e","h"]
console.log(solution(["H", "a", "n", "n", "a", "h"])); //["h","a","n","n","a","H"]
console.log(solution([])); // []
