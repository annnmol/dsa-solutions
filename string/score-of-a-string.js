/**
 * @problem https://leetcode.com/problems/score-of-a-string/description/?envType=problem-list-v2&envId=string
 * @param {string} s
 * @return {number}
 */

var solution = function (s) {
  let sum = 0;
  for (let i = 0; i < s.length - 1; i++) {
    const curr = s[i].toLowerCase().charCodeAt(0);
    const next = s[i + 1].toLowerCase().charCodeAt(0);
    const absDiff = Math.abs(curr - next);
    sum += absDiff;
  }

  return sum;
};

// ✅ Example usage
console.log(solution("hello")); // 13
console.log(solution("zaz")); // 50
