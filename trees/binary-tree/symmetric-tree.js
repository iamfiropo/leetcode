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
 
 Question: https://leetcode.com/problems/symmetric-tree
 
 Approach: Recursive
 Time complexity: O(n)
 Space complexity: O(n)
 */
var isSymmetric = function (root) {
  if (root === null) return true;

  function isMirror(tree1, tree2) {
    // the base case
    if (tree1 === null || tree2 === null) return tree1 === tree2;
    // the values of the two sides of the tree have to be the same
    if (tree1.val !== tree2.val) return false;
    return (
      isMirror(tree1.left, tree2.right) && isMirror(tree1.right, tree2.left)
    );
  }

  return isMirror(root.left, root.right);
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
 * @return {boolean}
 
 Approach: Iterative
 Time complexity: O(n)
 Space complexity: O(n)
 */
var isSymmetric = function (root) {
  let queue = [root, root];

  while (queue.length > 0) {
    let t1 = queue.shift();
    let t2 = queue.shift();

    if (t1 === null && t2 === null) continue;
    if (t1 === null || t2 === null) return false;
    if (t1.val !== t2.val) return false;

    queue.push(t1.left);
    queue.push(t2.right);
    queue.push(t1.right);
    queue.push(t2.left);
  }

  return true;
};
