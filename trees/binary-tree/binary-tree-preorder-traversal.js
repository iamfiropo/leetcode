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
 Note to self: DFS (Preorder Traversal) - NLR 
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
 * 
 * NLR - Node - Left - Right
 
 Approach:  Iteration using stack
 Time Complexity: O(n)
 Space Complexity: O(n)
 */

var preorderTraversal = function (root) {
  const result = [];

  const stack = [];
  let node = root;

  while (node !== null || stack.length !== 0) {
    /* 
      Corner case for when the current node reaches it's depth
      Then, the node variable receives the last added right node for the next traversal
      Hence, the reason stack was implemented
    */
    if (node === null) node = stack.pop();

    result.push(node.val);

    if (node.right) stack.push(node.right);

    node = node.left;
  }

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
 
 Approach: Iterative PostOrder Traversal
 Time Complexity: O(n)
 Space Complexity: O(n)
 */
var postorderTraversal = function (root) {
  const result = [];
  let stack = [];

  while (root || stack.length) {
    while (root) {
      if (root.right) stack.push(root.right);

      stack.push(root);
      root = root.left;
    }

    root = stack.pop();

    if (stack.length && root.right === stack[stack.length - 1]) {
      stack.pop();
      stack.push(root);
      root = root.right;
    } else {
      result.push(root.val);
      root = null;
    }
  }

  return result;
};
