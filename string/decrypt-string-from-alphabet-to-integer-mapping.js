/**
 * @problem https://leetcode.com/problems/decrypt-string-from-alphabet-to-integer-mapping
 * @param {string} s
 * @return {string}
 */
function code(n) {
  return String.fromCharCode(n + 96);
}
var solution = function (s) {
  let arr = s.split("");
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (i + 2 < s.length && arr[i + 2] === "#") {
      const temp = code(Number(String(arr[i]) + String(arr[i + 1])));
      result.push(temp);
      i = i + 2;
    } else {
      const temp = code(Number(arr[i]));
      result.push(temp);
    }
  }
  return result.join("");
};

// ✅ Example usage
console.log(solution("10#11#12")); // jkab
console.log(solution("1326#")); //acz
