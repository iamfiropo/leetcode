/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 
 Question: https://leetcode.com/problems/linked-list-cycle
 
 Approach: Hash Table
 Time Complexity: O(n)
 Space Complexity: O(n)
 */
var hasCycle = function (head) {
  const nodesSeenMap = new Map();

  while (head) {
    if (nodesSeenMap.has(head)) return true;

    nodesSeenMap.set(head);
    head = head.next;
  }

  return false;
};

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 
 Approach: Floyd's Cycle Finding Algorithm
 Time Complexity: O(n)
 Space Complexity: O(1)
 */
var hasCycle = function (head) {
  // empty head corner case
  if (!head || !head.next) return false;

  let slow = head;
  let fast = head.next;

  while (slow !== fast) {
    if (fast === null || fast.next === null) return false;

    slow = slow.next;
    fast = fast.next.next;
  }

  return true;
};
