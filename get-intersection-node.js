/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 
 Question: https://leetcode.com/problems/intersection-of-two-linked-lists
 
 Approach: Two Pointers
 Time Complexity: O(m + n)
 Time Complexity: O(1)
 */
var getIntersectionNode = function (headA, headB) {
  if (headA === null || headB === null) return null;

  let nodeA = headA;
  let nodeB = headB;

  while (nodeA !== nodeB) {
    nodeA = nodeA.next;
    nodeB = nodeB.next;

    if (nodeA === nodeB) return nodeA;

    if (nodeA === null) {
      nodeA = headB;
    }
    if (nodeB === null) {
      nodeB = headA;
    }
  }

  return nodeA;
};
