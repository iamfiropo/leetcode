/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 
 i will check if the root is not null
 while root and root.val is not equal to val
 check if root.left.val > val, then assign root.left to root and vice versa
 return root
 */

var searchBST = function (root, val) {
  while (root && root.val !== val) {
    if (root.val > val) {
      root = root.left;
    } else {
      root = root.right;
    }
  }

  return root;
};
