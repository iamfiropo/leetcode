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
 * @return {number[][]}
 
 Question: https://leetcode.com/problems/binary-tree-level-order-traversal
 
 Approach: Recursion
 Time Complexity: O(n)
 Space Complexity: O(n)
 */
var levelOrder = function (root) {
  let levels = [];

  if (root === null) return levels;

  function BFS(node, currentLevel) {
    // start the current level
    if (levels.length === currentLevel) levels.push([]);

    // append the current node value
    levels[currentLevel].push(node.val);

    // process child node for the next level
    if (node.left) BFS(node.left, currentLevel + 1);
    if (node.right) BFS(node.right, currentLevel + 1);
  }

  BFS(root, 0);
  return levels;
};
