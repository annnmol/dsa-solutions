/**
 * @problem https://leetcode.com/problems/reverse-only-letters/
 * @param {string} s
 * @return {string}
 */
function isCharacter(ch) {
  let code = ch.charCodeAt(0);
  // a-z 97-122 A-Z 65-90
  return (code >= 65 && code <= 90) || (code >= 97 && code <= 122);
}
var solution = function (s) {
  let arr = s.split("");
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    while (left < right && !isCharacter(arr[left])) {
      left++;
    }
    while (left < right && !isCharacter(arr[right])) {
      right--;
    }
    if (left < right) {
      let temp = arr[left];
      arr[left] = arr[right];
      arr[right] = temp;
      left++;
      right--;
    }
  }
  return arr.join("");
};

// ✅ Example usage
console.log(solution("a-bC-dEf-ghIj")); // j-Ih-gfE-dCba
console.log(solution("Test1ng-Leet=code-Q!")); //Qedo1ct-eeLg=ntse-T!
