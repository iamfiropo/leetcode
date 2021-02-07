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
 * @return {number[]}
 
 Question: https://leetcode.com/problems/binary-tree-inorder-traversal
 
 Approach: Recursion
 Time Complexity: O(n)
 Space Complexity: O(n)
 */
var inorderTraversal = function (root) {
  let result = [];

  function dfs(root) {
    // Base Case
    if (root === null) return result;

    dfs(root.left);
    result.push(root.val);
    dfs(root.right);
  }

  dfs(root);
  return result;
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
 * @return {number[]}
 
 Approach: Iteration using stack
 Time Complexity: O(n)
 Space Complexity: O(n)
 */
var inorderTraversal = function (root) {
  const result = [];
  let stack = [];
  let node = root;

  while (node || stack.length) {
    while (node !== null) {
      stack.push(node);
      node = node.left;
    }

    node = stack.pop();
    result.push(node.val);
    node = node.right;
  }

  return result;
};
