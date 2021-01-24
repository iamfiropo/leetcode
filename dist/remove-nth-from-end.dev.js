"use strict";

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
var removeNthFromEnd = function removeNthFromEnd(head, n) {
  var dummyHead = new ListNode(0, head);
  var slow = dummyHead;
  var fast = dummyHead;

  while (fast.next !== null) {
    fast = fast.next; // keep the slow pointer unattended to until there is an n nodes gap between slow and fast pointer

    if (n-- <= 0) {
      slow = slow.next;
    }
  }

  slow.next = slow.next.next;
  return dummyHead.next;
};
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
 
 Approach: Two Pass
 Time Complexity: O(n)
 Space Complexity: O(1)
 */


var removeNthFromEnd = function removeNthFromEnd(head, n) {
  var dummyHead = new ListNode(0, head);
  var lengthCount = 0;
  var first = head;

  while (first) {
    ++lengthCount;
    first = first.next;
  }

  lengthCount -= n;
  first = dummyHead;

  while (lengthCount-- > 0) {
    first = first.next;
  }

  first.next = first.next.next;
  return dummyHead.next;
};