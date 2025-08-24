/**
 * @problem https://leetcode.com/problems/check-if-all-characters-have-equal-number-of-occurrences/description/?envType=problem-list-v2&envId=string
 * @param {string} s
 * @return {boolean}
 */

var solution = function (s) {
  const map = new Map();

  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    map.set(ch, (map.get(ch) || 0) + 1);
  }

  let first = 0;
  for (const [key, value] of map.entries()) {
    if (first === 0) {
      first = value;
    } else if (value !== first) {
      return false;
    }
  }

  return true;
};

// ✅ Example usage
console.log(solution("abacbc")); // true
console.log(solution("aaabb")); // false
console.log(solution("a")); // true
