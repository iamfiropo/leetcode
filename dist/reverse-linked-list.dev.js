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
 * @return {ListNode}
 
 Question: https://leetcode.com/problems/reverse-linked-list/solution
 
 Approach: Iterative
 Time Complexity: O(n)
 Space Complexity: O(1)
 */
var _reverseList = function reverseList(head) {
  if (head === null || head.next === null) return head;
  var previousNode = null;

  while (head) {
    nextNode = head.next; // 2,3,4,5  |=>| 3,4,5  |=>| 4,5 |=>|   5   |=>| null

    head.next = previousNode; // null     |=>|    1   |=>| 2,1 |=>| 3,2,1 |=>| 4,3,2,1

    previousNode = head; // 1        |=>| 2,1 |=>| 3,2,1 |=>| 4,3,2,1 |=>| 5,4,3,2,1

    head = nextNode; // 2,3,4,5 |=>| 3,4,5 |=>| 4,5 |=>| 5 |=>| null
  }

  return previousNode;
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
 * @return {ListNode}
 
 Approach: Recursive
 Time Complexity: O(n)
 Space Complexity: O(n)
 */


var _reverseList = function reverseList(head) {
  // Recursion Boundary or Base Case
  if (head === null || head.next === null) return head;

  var p = _reverseList(head.next);

  head.next.next = head;
  head.next = null;
  return p;
};