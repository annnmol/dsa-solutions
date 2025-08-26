/**
 * @problem https://leetcode.com/problems/find-the-original-typed-string-i/
 * @param {string} word
 * @return {number}
 */

var solution = function (word) {
 let count = 0;
    for (i = 1; i < word.length; i++) {
        if (word[i] === word[i - 1]) count++;
    }

    //adding original string 1 + possible 
    return 1 + count
};

// ✅ Example usage
console.log(solution("abbcccc")); // 5
console.log(solution("abcd")); //1
console.log(solution("aaaa")) //4
