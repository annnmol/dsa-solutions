/**
 * @problem https://leetcode.com/problems/capitalize-the-title/description/
 * @param {string} s
 * @return {string}
 */

var solution = function (title) {
  let arr = title.split(" ");
  let res = [];
  for (const word of arr) {
    if (word.length < 3) {
      let temp = word.toLowerCase();
      res.push(temp);
    } else {
      let firstCh = word[0].toUpperCase();
      let temp = firstCh + word.toLowerCase().slice(1);
      res.push(temp);
    }
  }
  return res.join(" ");
};

// ✅ Example usage
console.log(solution("capiTalIze tHe titLe")); // Capitalize The Title
console.log(solution("First leTTeR of EACH Word")); //First Letter of Each Word
