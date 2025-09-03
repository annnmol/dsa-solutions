/**
 * @problem bubble-sort
 * @param {Array} s
 * @return {Array}
 */

var solution = function (s) {
  let n = s.length;
  for (let i = 0; i < n; i++) {
    let isSwapped = false;
    for (let j = 0; j < n - i - 1; j++) {
      if (s[j] > s[j + 1]) {
        [s[j], s[j + 1]] = [s[j + 1], s[j]];
        isSwapped = true;
      }
    }
    if (!isSwapped) break;
  }
  return s;
};

// ✅ Example usage
console.log(solution([8, 10, 5, 20])); // [5,8,10,20]
console.log(solution([5, 7, 6, 10, 20])); //[5,6,7,10,20]
console.log(solution([])); // []
console.log(solution([1])); // [1]
console.log(solution([5, 4, 3, 2, 1])); // [1, 2, 3, 4, 5]
console.log(solution([3, 3, 2, 1])); // [1, 2, 3, 3]
