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
 
 Question: https://leetcode.com/problems/binary-tree-postorder-traversal
 
  LRN
 
 Approach: Recursion
 Time Complexity: O(n)
 Space Complexity: O(n)
 */
var postorderTraversal = function (root) {
  let result = [];

  function dfs(root) {
    if (root === null) return result;

    dfs(root.left);
    dfs(root.right);

    result.push(root.val);
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
 
  LRN
 
 Approach: Iterative Preorder Traversal: Tweak the order of the output
 Time Complexity: O(n)
 Space Complexity: O(n)
 */
var postorderTraversal = function (root) {
  const result = [];
  let stack = [];

  if (root === null) return result;

  stack.push(root);

  while (stack.length) {
    root = stack.pop();
    result.unshift(root.val);

    if (root.left !== null) stack.push(root.left);
    if (root.right !== null) stack.push(root.right);
  }

  return result;
};
