/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 
 Question: https://leetcode.com/problems/maximum-depth-of-binary-tree
 
 Approach: Top-down Recursion
 Time complexity: O(n)
 Space complexity: O(n)
 */
var maxDepth = function (root) {
  if (root === null) return 0;

  let answer = 0;

  function maximumDepth(root, level) {
    // When there is no leaf on all the node trees
    if (root.left === null && root.right === null)
      answer = Math.max(answer, level);

    if (root.left) maximumDepth(root.left, level + 1);
    if (root.right) maximumDepth(root.right, level + 1);
  }

  maximumDepth(root, 1);
  return answer;
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
 * @param {TreeNode} root
 * @return {number}
 
  Approach: Bottom-up Recursion === DFS Strategy
  Time complexity: O(n)
  Space complexity: O(n)
 */
var maxDepth = function (root) {
  if (root === null) return 0;

  let leftDepth = maxDepth(root.left);
  let rightDepth = maxDepth(root.right);

  return Math.max(leftDepth, rightDepth) + 1;
};
