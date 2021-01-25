/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 
 Question: https://leetcode.com/problems/merge-two-sorted-lists
 
 Approach: Iterative
 Time Complexity: O(n + m)
 Space Complexity: O(1)
 */
var mergeTwoLists = function (l1, l2) {
  let dummyHead = new ListNode(0);

  let prev = dummyHead;

  while (l1 && l2) {
    if (l1.val <= l2.val) {
      prev.next = l1;
      l1 = l1.next;
    } else {
      prev.next = l2;
      l2 = l2.next;
    }

    prev = prev.next;
  }

  prev.next = l1 === null ? l2 : l1;
  return dummyHead.next;
};
