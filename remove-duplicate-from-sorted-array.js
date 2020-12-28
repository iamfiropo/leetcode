var removeDuplicates = function (nums) {
  if (nums.length === 0) return 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      nums.splice(i, 1);
      i--;
    }
  }

  return nums.length;
};

const removeDuplicates = function (nums) {
  if (nums.length === 0) return 0;

  let i = 0;

  for (let j = 1; j < nums.length; j++) {
    if (nums[i] !== nums[j]) {
      nums[++i] = nums[j];
    }
  }

  return i + 1;
};

// Time complexity of both solutions: O(n)
// Space complexity of both solutions: O(1)

// Both solutions are two pointers approach
