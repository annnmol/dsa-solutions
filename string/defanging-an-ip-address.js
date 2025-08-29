/**
 * @problem https://leetcode.com/problems/defanging-an-ip-address
 * @param {string} s
 * @return {string}
 */

var solution = function (address) {
 return address.replaceAll(".", "[.]");
};

// ✅ Example usage
console.log(solution("1.1.1.1")); // 1[.]1[.]1[.]1
console.log(solution("255.100.50.0")); //255[.]100[.]50[.]0
