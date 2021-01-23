/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 
 Question: https://leetcode.com/problems/remove-nth-node-from-end-of-list
 Approach: One Pass
 Time Complexity: O(n)
 Space Complexity: O(1)
 */
var removeNthFromEnd = function (head, n) {
  const dummyHead = new ListNode(0, head);
  let slow = dummyHead;
  let fast = dummyHead;

  while (fast.next !== null) {
    fast = fast.next;

    if (n-- <= 0) {
      slow = slow.next;
    }
  }
  slow.next = slow.next.next;

  return dummyHead.next;
};
