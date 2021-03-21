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
 
 Question: https://leetcode.com/problems/add-two-numbers
 
 Approach: Elementary Math
 
 Time Complexity: O(max(m,n))
 Space Complexity: O(max(m,n))
 */

var addTwoNumbers = function (l1, l2) {
  let head = new ListNode(0);
  let current = head;
  let carry = 0;
  let p = l1;
  let q = l2;

  while (p || q) {
    // check if node value is true
    let l1Value = p ? p.val : 0;
    let l2Value = q ? q.val : 0;

    let sum = l1Value + l2Value + carry;
    carry = Math.floor(sum / 10);
    current.next = new ListNode(sum % 10);
    current = current.next;
    if (p) p = p.next;
    if (q) q = q.next;
  }

  if (carry) {
    current.next = new ListNode(carry);
  }

  return head.next;
};

var addTwoNumbers = function (l1, l2) {
  let head = new ListNode(0);
  let node = head;
  let carry = 0;

  while (l1 || l2) {
    let l1Value = l1 ? l1.val : 0;
    let l2Value = l2 ? l2.val : 0;

    let sum = l1Value + l2Value + carry;
    carry = 0;
    let newValue = sum;

    if (sum > 9) {
      //remove 10 from sum, update the newValue with the remainder and update carry
      newValue = sum % 10;
      carry = 1;
    }

    node.next = new ListNode(newValue);
    node = node.next;

    if (l1) {
      l1 = l1.next;
    }

    if (l2) {
      l2 = l2.next;
    }
  }

  if (carry) {
    node.next = new ListNode(carry);
  }

  return head.next;
};
