/**
 * @problem https://leetcode.com/problems/valid-anagram/description/?envType=problem-list-v2&envId=string
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

var solution = function (s, t) {
  // const normaliseStr = (text) => text.toLowerCase().replace(/[^a-z0-9]/g, "");
  // s = normaliseStr(s);
  // t = normaliseStr(t);

  // if (s.length != t.length) return false;

  // const map = new Map();

  // for (let i of s) {
  //   if (map.has(i)) {
  //     const countValue = map.get(i) || 0;
  //     map.set(i, countValue + 1);
  //   } else {
  //     map.set(i, 1);
  //   }
  // }
  // for (let i of t) {
  //   if (!map.has(i)) return false;

  //   const countValue = map.get(i);
  //   map.set(i, countValue - 1);
  // }

  // for (let [key, val] of map.entries()) {
  //   if (val !== 0) return false;
  // }

  // return true;

  if (s.length != t.length) return false;

  const f = new Array(26).fill(0);

  for (let i = 0; i < s.length; i++) {
    const firstStringChIndex = s.charCodeAt(i) - 97;
    const secondStringChIndex = t.charCodeAt(i) - 97;

    f[firstStringChIndex] += 1;
    f[secondStringChIndex] -= 1;
  }

  for (const val of f) {
    if (val !== 0) return false;
  }

  return true;
};

// ✅ Example usage
console.log(solution("anagram", "nagaram")); // true
console.log(solution("rat", "car")); // false
