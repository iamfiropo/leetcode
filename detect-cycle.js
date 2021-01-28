/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 
 Question: https://leetcode.com/problems/linked-list-cycle-ii
 
 Approach: Hash Table
 Time Complexity: O(n)
 Space Complexity: O(n)
 */
var detectCycle = function (head) {
  let node = head;
  let map = new Map();

  while (node !== null) {
    if (map.has(node)) return node;

    map.set(node);
    node = node.next;
  }

  return null;
};
