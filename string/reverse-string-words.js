/**
 * @problem https://leetcode.com/problems/reverse-words-in-a-string-iii/description/
 * @param {string} s
 * @return {string}
 */

function rev(word) {
  let arr = word.split("");
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }

  return arr.join("");
}

var solution = function (s) {
  let arr = s.split(" ");
  let res = [];

  for (const word of arr) {
    const reversed = rev(word);
    res.push(reversed);
  }

  return res.join(" ");
};

// ✅ Example usage
console.log(solution("Let's take LeetCode contest")); // s'teL ekat edoCteeL tsetnoc
console.log(solution("Mr Ding")); //rM gniD
