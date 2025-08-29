/**
 * @problem https://leetcode.com/problems/reverse-prefix-of-word/
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

var solution = function (word,ch) {
  let index = word.indexOf(ch) + 1;
    let pre = word.slice(0, index);
    let post = word.slice(index);
    let revPre = rev(pre);
    return revPre + post;
};

// ✅ Example usage
console.log(solution("abcdefd","d")); // dcbaefd
console.log(solution("xyxzxe","z")); //zxyxxe
