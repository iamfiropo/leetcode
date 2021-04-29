/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 
 Question: https://leetcode.com/problems/populating-next-right-pointers-in-each-node
 
 Approach: Recursion
 Time Complexity: O(n)
 Space Complexity: O(1)
 */
function connect(root) {
  if (root === null || root.left === null) return root;

  root.left.next = root.right;

  if (root.next) root.right.next = root.next.left;

  connect(root.left);
  connect(root.right);

  return root;
}
