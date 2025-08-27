/**
 * @problem https://leetcode.com/problems/minimum-index-sum-of-two-lists/
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */

var solution = function (list1, list2) {
  let map = new Map();
  for (let i = 0; i < list1.length; i++) {
    const word = list1[i];
    const list2Index = list2.indexOf(word || -1);
    if (list2Index > -1) {
      map.set(word, list2Index + i);
    }
  }
  let min = Infinity;
  let res = [];
  for (const [key, value] of map.entries()) {
    if (value < min) {
      min = value;
      res = [key];
    } else if (value === min) {
      res.push(key);
    }
  }
  return res;
};

// ✅ Example usage
console.log(
  solution(
    ["Shogun", "Tapioca Express", "Burger King", "KFC"],
    [
      "Piatti",
      "The Grill at Torrey Pines",
      "Hungry Hunter Steakhouse",
      "Shogun",
    ]
  )
); // ["Shogun"]
console.log(
  solution(
    ["Shogun", "Tapioca Express", "Burger King", "KFC"],
    ["KFC", "Shogun", "Burger King"]
  )
); // ["Shogun"]
console.log(solution(["happy", "sad", "good"], ["sad", "happy", "good"])); // ["sad","happy"]
