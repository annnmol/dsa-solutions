/**
 * @problem https://leetcode.com/problems/number-of-segments-in-a-string
 * @param {string} s
 * @return {number}
 */

var solution = function (s) {
    let arr = s.trim().split(' ');
    let res=[];
    for (const word of arr){
        if(word.length > 0) res.push(word)
    }
    return res.length;
};

// ✅ Example usage
console.log(solution("Hello, my name is John")); // 5
console.log(solution("Hello")); //1
console.log(solution("")) //0
console.log(", , , ,        a, eaefa") //6
