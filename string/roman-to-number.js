/**
 * @problem https://leetcode.com/problems/roman-to-integer/description/?envType=problem-list-v2&envId=string
 * @param {string} s
 * @return {number}
 */

var solution = function (s) {
  const map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let value = 0;
  for (let i = 0; i < s.length; i++) {
    const curr = map[s[i]];
    const next = map[s[i + 1]] ?? 0;

    if (curr < next) {
      value -= curr;
    } else {
      value += curr;
    }
  }
  return value;
};

// ✅ Example usage
console.log(solution("III")); // 3
console.log(solution("LVIII")); // 58
console.log(solution("MCMXCIV")); // 1994
