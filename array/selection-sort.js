/**
 * @problem selection-sort
 * @param {Array} s
 * @return {Array}
 * @description find the minimum element index in each iteration and swap it with the first unsorted element. After each iteration, the smallest unsorted element is moved to its correct position.
 * time complexity: O(n^2) bcz we have nested loops, each going up to n in the worst case
 * space complexity: O(1)
 */

var solution = function (s) {
  let n = s.length;
  for (let i = 0; i < n; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (s[j] < s[minIndex]) {
        minIndex = j;
      }
    }
    [s[i], s[minIndex]] = [s[minIndex], s[i]];
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
