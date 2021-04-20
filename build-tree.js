/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 
 Question: https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal
 
 Approach: Recursion
 Time Complexity: O(n)
 Space Complexity: O(1)
 */

var buildTree = function (preorder, inorder) {
  function helper(rootIdx, p, l1, l2) {
    if (rootIdx > p || l1 > l2) return null; // base case

    const value = preorder[rootIdx];
    const index = inorder.indexOf(value);
    const nLeft = index - l1;
    const root = new TreeNode(value);
    const mid = rootIdx + nLeft;

    root.left = helper(rootIdx + 1, mid, l1, index - 1);
    root.right = helper(mid + 1, p, index + 1, l2);

    return root;
  }

  return helper(0, preorder.length - 1, 0, inorder.length - 1);
};
