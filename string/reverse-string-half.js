/**
 * @problem https://leetcode.com/problems/reverse-string-ii/description/
 * @param {string} s
 * @param {number} k
 * @return {string}
 */

var solution = function (s, k) {
  // let firstPart = s.slice(0, k).split("");
  // const restPart = s.slice(k);

  // let left = 0;
  // let right = firstPart.length - 1;
  // while (left < right) {
  //   const temp = firstPart[left];
  //   firstPart[left] = firstPart[right];
  //   firstPart[right] = temp;
  //   left++;
  //   right--;
  // }
  // const res = firstPart.join("").concat(restPart);
  // return res;
  let arr = s.split("");
  for (let i = 0; i < arr.length; i += 2 * k) {
    let left = i;
    let right = Math.min(i + k - 1, arr.length - 1);
    while (left < right) {
      const temp = arr[left];
      arr[left] = arr[right];
      arr[right] = temp;
      left++;
      right--;
    }
  }

  return arr.join('')
};

// ✅ Example usage
console.log(solution("abcdefg", 2)); // bacdefg
console.log(solution("abcd", 2)); //bacd
console.log(solution("abc", 4)); // cba
