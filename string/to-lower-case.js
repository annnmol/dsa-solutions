/**
 * @problem https://leetcode.com/problems/to-lower-case
 * @param {string} s
 * @return {string}
 */

var solution = function (s) {
  // return s.toLowerCase()
  let res = "";
  for (const i of s) {
    const code = i.charCodeAt(0);
    const lowerCaseCode = code >= 65 && code <= 90 ? code + 26 + 6 : code; // 65-90 97-122
    res = res + String.fromCharCode(lowerCaseCode);
  }
  return res;
};

// ✅ Example usage
console.log(solution("Hello")); // hello
console.log(solution("LOVe5LY")); //lovel5y
