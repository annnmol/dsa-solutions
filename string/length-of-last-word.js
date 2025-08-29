/**
 * @problem https://leetcode.com/problems/length-of-last-word
 * @param {string} s
 * @return {number}
 */

var solution = function (s) {
    let arr = s.trim().split(" ");
    return arr[arr.length - 1].length
};

// ✅ Example usage
console.log(solution("   fly me   to   the moon  ")); // 4
console.log(solution("abc")); // 3
console.log(solution("luffy is still joyboy")); // 6
