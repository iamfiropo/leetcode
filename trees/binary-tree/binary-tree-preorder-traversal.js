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
 
 Question: https://leetcode.com/problems/binary-tree-preorder-traversal
 
 Approach: Recursion
 Time Complexity: O(n)
 Space Complexity: O(n)
 */
var preorderTraversal = function (root) {
  let result = [];

  function dfs(root) {
    if (root === null) return result;

    result.push(root.val);

    dfs(root.left);
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
 
 Approach: Recursion
 Time Complexity: O(n)
 Space Complexity: O(n)
 */
var preorderTraversal = function (root) {
  return dfs(root, []);
};

function dfs(root, arr) {
  if (root === null) return arr;

  arr.push(root.val);
  arr = dfs(root.left, arr);

  return dfs(root.right, arr);
}

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
 
 Approach: Morris Traversal
 Time Complexity: O(n)
 Space Complexity: O(1)
 */
var preorderTraversal = function (root) {
  let node = root;
  let output = [];

  while (node) {
    if (!node.left) {
      output.push(node.val);
      node = node.right;
    } else {
      predecessor = node.left;

      while (predecessor.right && predecessor.right !== node)
        predecessor = predecessor.right;

      if (!predecessor.right) {
        output.push(node.val);
        predecessor.right = node;
        node = node.left;
      } else {
        predecessor.right = null;
        node = node.right;
      }
    }
  }

  return output;
};
