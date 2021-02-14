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
 * @return {boolean}
 
 QUESTION: https://leetcode.com/problems/validate-binary-search-tree
 
 Approach: DFS - Inorder strategy, as this traversal automatically returns a sorted tree
 Time complexity: O(n)
 Space complexity: O(n)
 
 */
var isValidBST = function (root) {
  let previousNode;

  function DFSInorder(root) {
    if (root === null) return true;

    if (!DFSInorder(root.left)) return false;
    if (previousNode !== null && root.val <= previousNode) return false;

    previousNode = root.val;
    return DFSInorder(root.right);
  }

  return DFSInorder(root);
};
