/**
 * @problem https://leetcode.com/problems/goal-parser-interpretation
 * @param {string} command
 * @return {string}
 */

var solution = function (command) {
 return command.replaceAll("()","o").replaceAll("(al)","al");
};

// ✅ Example usage
console.log(solution("G()(al)")); // Goal
console.log(solution("G()()()()(al)")); //Gooooal
console.log(solution("(al)G(al)()()G")) //alGalooG
