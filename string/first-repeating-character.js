/**
 * @problem https://leetcode.com/problems/first-letter-to-appear-twice/description/?envType=problem-list-v2&envId=string
 * @param {string} s
 * @return {character}
 */

var solution = function (s) {
  const map = new Map();

  for (const i of s) {
    if (map.has(i)) {
      map.set(i, map.get(i) + 1);
      return i;
    } else {
      map.set(i, 1);
    }
  }
};

// ✅ Example usage
console.log(solution("abccbaacz")); // c
console.log(solution("abcdd")); // d
