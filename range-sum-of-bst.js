var rangeSumBST = function (root, L, R) {
  //recursion using dfs
  let totalSum = 0;

  function rangeSum(node) {
    if (!node) {
      return totalSum;
    }

    if (node.val >= L && node.val <= R) {
      totalSum += node.val;
    }

    if (L < node.val) {
      rangeSum(node.left);
    }

    if (R > node.val) {
      rangeSum(node.right);
    }
  }

  rangeSum(root);
  return totalSum;
};
