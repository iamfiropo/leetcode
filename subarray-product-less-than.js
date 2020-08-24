var numSubarrayProductLessThanK = function (nums, k) {
  let left = 0;
  let counter = 0;
  let product = 1;
  const length = nums.length;

  for (let right = 0; right < length; right++) {
    product *= nums[right];

    while (product >= k && left < length) {
      product /= nums[left];
      left++;
    }
    // 10, 5
    if (left < length) {
      counter += right - left + 1;
    }
  }

  return counter;
};

console.log(numSubarrayProductLessThanK([10, 5, 2, 6], 100));
