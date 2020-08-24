/**
 *
 * @param {*} node
 * check if node exist
 * swap left node with right node and vice versa
 * i will make a recursive call to invert both left and right node
 */

function invertTree(node) {
  invert(node);
  return node;
}

function invert(node) {
  if (!node) {
    return;
  }

  swap(node);

  invert(node.left);
  invert(node.right);

  return node;
}

function swap(node) {
  const temp = node.left;
  node.left = node.right;
  node.right = temp;

  return node;
}
