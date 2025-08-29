/**
 * @problem https://leetcode.com/problems/final-value-of-variable-after-performing-operations
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

var solution = function (operations) {
 let sum = 0;
    for (let i = 0; i < operations.length; i++) {
        let op = operations[i];
        if (op === "++X") sum = 1 + sum;
        if (op === "--X") sum = -1 + sum;
        if (op === "X++") sum = sum + 1;
        if (op === "X--") sum = sum - 1;
    }

    return sum;
};

// ✅ Example usage
console.log(solution(["--X","X++","X++"])); // 1
console.log(solution(["++X","++X","X++"])); //3
