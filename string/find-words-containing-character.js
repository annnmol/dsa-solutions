/**
 * @problem https://leetcode.com/problems/find-words-containing-character/description/?envType=problem-list-v2&envId=string
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */

var solution = function (words, x) {
  let arr = [];
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    if (word.indexOf(x) !== -1) arr.push(i);
  }

  return arr;
};

// ✅ Example usage
console.log(solution(["leet", "code"], "e")); // [0,1]
console.log(solution(["abc", "bcd", "aaaa", "cbc"], "a")); // [0,2]
console.log(solution(["abc", "bcd", "aaaa", "cbc"], "z")); // []
