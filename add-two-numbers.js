// https://leetcode.com/problems/add-two-numbers

/**
 * instantiate ListNode class and assign it to head
 * assign head to node
 * initialize carry with 0;
 * Traverse l1 and l2 nodes, conditionally picking the value of each node that is not undefined, else pick 0
 * add the two values and carry on each traversal
 * Reset carry to 0;
 * assign sum to newValue variable
 * check if sum is greater than 9
 * remove 10 from sum, update the newValue with the
 *  remainder and update carry
 * instantiate ListNode with the newValue update
 * assing node.next to node
 * Check if each linkedlist node input have next node
 * Outside the traversal, check if there is carry and
 * instantiate ListNode with carry and assign it to node.next
 * return head.next
 */

var addTwoNumbers = function (l1, l2) {
  let head = new ListNode(0);
  let node = head;
  let carry = 0;

  while (l1 || l2) {
    let l1Value = l1 ? l1.val : 0;
    let l2Value = l1 ? l2.val : 0;

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
