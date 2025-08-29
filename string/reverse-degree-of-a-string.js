/**
 * @problem https://leetcode.com/problems/reverse-degree-of-a-string
 * @param {string} s
 * @return {string}
 */

function code(ch) {
    let chIndex = ch.charCodeAt(0) - 96;
    return 27 - chIndex;
}

var solution = function (s) {
    let sum = 0;
    for (let i = 0; i < s.length; i++) {
        let res = code(s[i]) * (i + 1);
        sum += res
    }
    return sum
};

// ✅ Example usage
console.log(solution("abc")); // 148
console.log(solution("zaza")); //160
