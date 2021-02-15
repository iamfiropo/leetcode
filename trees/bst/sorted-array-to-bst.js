/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 
 Question: https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree
 
 Approach: Recursive
 Time Complexity: O(n)
 Space Complexity: O(n)
 */
var sortedArrayToBST = function (nums) {
  function helper(left, right) {
    if (left > right) return null;

    let p = Math.floor((right + left) / 2);
    const root = new TreeNode(nums[p]);

    root.left = helper(left, p - 1);
    root.right = helper(p + 1, right);

    return root;
  }

  return helper(0, nums.length - 1);
};

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 
 Approach: Recursive
 Time Complexity: O(n)
 Space Complexity: O(n)
 */
var sortedArrayToBST = function (nums) {
  if (nums == null || !nums.length) return null;

  let p = Math.floor(nums.length / 2);
  const node = new TreeNode(nums[p]);
  node.left = sortedArrayToBST(nums.slice(0, p));
  node.right = sortedArrayToBST(nums.slice(p + 1, nums.length));
  return node;
};
