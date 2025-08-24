/**
 * @problem https://leetcode.com/problems/first-unique-character-in-a-string/description/?envType=problem-list-v2&envId=string
 * @param {string} s
 * @return {number}
 */

var solution = function (s) {
  const map = new Map();

  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    map.set(ch, (map.get(ch) || 0) + 1);
  }
  console.log(map);

  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    if (map.get(ch) === 1) return i;
  }

  return -1;
};

// ✅ Example usage
console.log(solution("swiss")); // 1
console.log(solution("abccbda")); // 5
console.log(solution("abba")); // -1
