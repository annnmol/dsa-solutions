/**
 * @problem https://leetcode.com/problems/valid-palindrome-ii
 * @param {string} s
 * @return {boolean}
 */

function isPalindrome(arr, left, right) {
  while (left < right) {
    if (arr[left] !== arr[right]) return false;
    left++;
    right--;
  }
  return true;
}

var solution = function (s) {
  const normaliseStr = (text) => text.toLowerCase().replace(/[^a-z0-9]/g, "");
  s = normaliseStr(s);

  let arr = s.split("");
  let left = 0;
  let right = arr.length - 1;
  let count = 0;
  while (left < right) {
    if (count > 1) return false;

    if (arr[left] !== arr[right] && count === 0) {
      count++;
      // left++;
      // right--;
      //here only skip either left or right not both
      if (
        isPalindrome(arr, left + 1, right) ||
        isPalindrome(arr, left, right - 1)
      )
        return true;
      else return false;
    } else if (arr[left] === arr[right]) {
      left++;
      right--;
    } else return false;
  }
  return true;
};

// ✅ Example usage
console.log(solution("aba")); // true
console.log(solution("abc")); // false
console.log(solution("abca")); // true
