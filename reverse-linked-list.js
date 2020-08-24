var reverseList = function (head) {
  let previous = null;

  while (head) {
    const temp = head.next;
    head.next = previous;
    previous = head;
    head = temp;
  }

  return previous;
};

console.log(reverseList([1, 2, 3, 4, 5]));
