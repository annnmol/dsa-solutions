/**
 * @problem https://leetcode.com/problems/truncate-sentence
 * @param {string} s
 * @param {number} k
 * @return {string}
 */

var solution = function (s,k) {
    let arr = s.split(' ');
    return arr.slice(0,k).join(' ');
};

// ✅ Example usage
console.log(solution("Hello how are you Contestant",4)); // Hello how are you
console.log(solution("What is the solution to this problem",4)); // What is the solution
console.log(solution("chopper is not a tanuki",5)); // chopper is not a tanuki
