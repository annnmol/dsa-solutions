/**
 * @problem https://leetcode.com/problems/valid-palindrome/description/?envType=problem-list-v2&envId=string
 * @param {string} s
 * @return {boolean}
 */

var solution = function (s) {
  const normaliseStr = (text) => text.toLowerCase().replace(/[^a-z0-9]/g, "");
  s = normaliseStr(s);

  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (s[left] != s[right]) return false;

    left++;
    right--;
  }

  return true;
};

// ✅ Example usage
console.log(solution("A man, a plan, a canal: Panama")); // true
console.log(solution("race a car")); // false
console.log(solution(" ")); // true
