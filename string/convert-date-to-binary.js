/**
 * @problem https://leetcode.com/problems/convert-date-to-binary
 * @param {string} s
 * @return {string}
 */

var solution = function (date) {
  let arr = date.split("-");
  let res = arr.map((i) => Number(i).toString(2));
  return res.join("-");
};

// ✅ Example usage
console.log(solution("2080-02-29")); // 100000100000-10-11101
console.log(solution("1900-01-01")); // 11101101100-1-1
