/**
 * Link: https://leetcode.com/problems/binary-search/
 * Difficulty: Easy
 * Time: 15 min
 */

/**
 * Given an array of integers nums which is sorted in ascending order, and an 
 * integer target, write a function to search target in nums. If target exists, 
 * then return its index. Otherwise, return -1.
 * 
 * You must write an algorithm with O(log n) runtime complexity.
 * 
 * Example 1:
 * Input: nums = [-1,0,3,5,9,12], target = 9
 * Output: 4
 * Explanation: 9 exists in nums and its index is 4
 * 
 * Example 2:
 * Input: nums = [-1,0,3,5,9,12], target = 2
 * Output: -1
 * Explanation: 2 does not exist in nums so return -1
 * 
 * Constraints:
 * 1 <= nums.length <= 104
 * -104 < nums[i], target < 104
 * All the integers in nums are unique.
 * nums is sorted in ascending order.
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const binarySearch = function(nums, target) {
  const midIndex = Math.floor(nums.length / 2);
  if (target === nums[midIndex]) return midIndex;
  if (nums.length === 1) return -1;
  if (target > nums[midIndex]) {
    const index = binarySearch(nums.slice(midIndex), target);
    if (index === -1) return -1;
    else return midIndex + index;
  }
  else return binarySearch(nums.slice(0, midIndex), target);
};

module.exports = {binarySearch};