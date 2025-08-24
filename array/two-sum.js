/**
 * 📝 Problem: Two Sum https://leetcode.com/problems/two-sum/description/
 *
 * Given an array of integers `nums` and an integer `target`,
 * return indices of the two numbers such that they add up to `target`.
 *
 * Example:
 * Input: nums = [2,7,11,15], target = 9
 * Output: [0,1]
 *
 * 🔹 Topic: Arrays, HashMap
 * 🔹 Difficulty: Easy
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

function solution(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }
  return [];
}

// ✅ Example usage
console.log(solution([4,5,12,16], 9)); // [0,1]
console.log(solution([7,1,5], 6));     // [1,2]
