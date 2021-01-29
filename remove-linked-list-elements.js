/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 
 Question: https://leetcode.com/problems/remove-linked-list-elements
 
 Approach: One pass
 Time Complexity: O(n)
 Space Complexity: O(1)
 */
var removeElements = function (head, val) {
  /* 
      Edge case for: [val], [val, val] and so on
      re-assign null to head provided val is the first node value and head.val === val
  */
  while (head && head.val === val) head = head.next;

  if (head === null) return head;

  let current = head;
  while (current.next !== null) {
    if (current.next.val === val) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }

  return head;
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
 * @param {number} val
 * @return {ListNode}
 
 Approach: Sentinel
 Time Complexity: O(n)
 Space Complexity: O(1)
 */
var removeElements = function (head, val) {
  let sentinel = new ListNode(0);
  sentinel.next = head;

  let prev = sentinel;
  let curr = head;

  while (curr) {
    if (curr.val === val) {
      prev.next = curr.next;
    } else {
      prev = curr;
    }

    curr = curr.next;
  }

  return sentinel.next;
};
