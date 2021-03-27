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
 
 Question: https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal
 
 Approach: DFS (Depth First Search)
 Time Complexity: O(N), where N is the number of nodes in the tree
 Space Complexity: O(H), where H is the height of the tree, i.e the number of levels in the tree, which would be roughly log base 2 of N
 */
var zigzagLevelOrder = function (root) {
  let result = [];
  if (root === null) return result;

  function DFS(root, level, result) {
    if (level >= result.length) {
      let newLevel = [];
      newLevel.push(root.val);
      result.push(newLevel);
    } else {
      if (level % 2 === 0) {
        result[level].push(root.val);
      } else {
        result[level].unshift(root.val);
      }
    }

    if (root.left !== null) DFS(root.left, level + 1, result);
    if (root.right !== null) DFS(root.right, level + 1, result);
  }

  DFS(root, 0, result);

  return result;
};
