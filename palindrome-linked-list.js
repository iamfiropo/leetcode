/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 *
 * Question: https://leetcode.com/problems/palindrome-linked-list
 *
 * Approach: Copy into array list and use two pointers technique
 * Time Complexity: O(2n) === O(n)
 * Time Complexity: O(n)
 */
var isPalindrome = function (head) {
  if (head === null || head.next === null) return true;

  let dummy = head;
  const vals = [];

  // push the value of each node
  while (dummy) {
    vals.push(dummy.val);
    dummy = dummy.next;
  }

  let left = 0;
  let right = vals.length - 1;

  // using two pointers, compare head from left to the middle and vals from right to the middle
  while (left++ < right) {
    if (head.val !== vals[right--]) return false;
    head = head.next;
  }

  return true;
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
 * @return {boolean}
 
 Approach: Recursive
 Time Complexity: O(n)
 Space Complexity: O(n)
 */
var isPalindrome = function (head) {
  let frontPointer = head;

  function recursiveCheck(currentNode = head) {
    if (currentNode) {
      if (
        !recursiveCheck(currentNode.next) ||
        frontPointer.val !== currentNode.val
      )
        return false;

      frontPointer = frontPointer.next;
    }

    return true;
  }

  return recursiveCheck();
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
 * @return {boolean}
 
 Approach: Reverse Second Half In-Place
 Time Complexity: O(n)
 Space Complexity: O(1)
 */
var isPalindrome = function(head) {
  if (!head || !head.next) return true;
  
  let firstHalfEnd = endOfFirstHalf(head);
  let secondHalfStart = reverseList(firstHalfEnd.next)
  
  let result = true;
  let firstPosition = head;
  let secondPosition = secondHalfStart;
  
  while (result && secondPosition !== null) {
      if (firstPosition.val !== secondPosition.val) result = false;
      
      firstPosition = firstPosition.next;
      secondPosition = secondPosition.next;
  }
  
  firstHalfEnd.next = reverseList(secondHalfStart);
  
  return result;
};

function endOfFirstHalf(head) {
  let slowPointer = head;
  let fastPointer = head;
  
  while (fastPointer.next !== null && fastPointer.next.next !== null) {
      fastPointer = fastPointer.next.next;
      slowPointer = slowPointer.next;
  }
  
  return slowPointer
}

function reverseList(head) {
  let previous = null;
  
  while(head) {
      temp = head.next;
      head.next = previous;
      previous = head;
      head = temp;
  }
  
  return previous;
}