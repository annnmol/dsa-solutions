/**
 * @problem https://leetcode.com/problems/keyboard-row/
 * @param {string[]} words
 * @return {string[]}
 */
function revString(s) {
  let arr = s.split("");
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    const temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
    left++;
    right--;
  }
  return arr.join("");
}
var solution = function (words) {
  const firstRow = new Set("qwertyuiop".split(""));
  const secondRow = new Set("asdfghjkl".split(""));
  const thirdRow = new Set("zxcvbnm".split(""));
  let res = [];
  for (const word of words) {
    let map = new Map();
    let wordArr = word.toLowerCase().split("");
    for (const i of wordArr) {
      if (firstRow.has(i)) {
        map.set("first", (map.get("first") || 0) + 1);
      }
      if (secondRow.has(i)) {
        map.set("second", (map.get("second") || 0) + 1);
      }

      if (thirdRow.has(i)) {
        map.set("third", (map.get("third") || 0) + 1);
      }
    }
    let isSingleRowWord = true;
    let occur = 0;
    for (const [key, value] of map.entries()) {
      if (occur === 0) {
        occur = value;
      } else if (occur > 0) {
        isSingleRowWord = false;
      }
    }

    if (isSingleRowWord) {
      res.push(word);
    }
  }

  return res;
};

// ✅ Example usage
console.log(solution(["Hello","Alaska","Dad","Peace"])); // ["Alaska","Dad"]
console.log(solution(["oMk"])); //[]
console.log(solution(["adsdf","sfd","Az"])) //["adsdf","sfd"]
