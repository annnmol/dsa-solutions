/**
 * @problem https://leetcode.com/problems/number-of-changing-keys
 * @param {string} s
 * @return {string}
 */

var solution = function (s) {
  let arr = s.toLowerCase().split('');
    let count = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        let curr = arr[i];
        let next = arr[i + 1];
        if (curr !== next) {
            count += 1;
        };
    }
    return count;
};

// ✅ Example usage
console.log(solution("aAbBcC")); // 2
console.log(solution("AaAaAaaA")); //0
