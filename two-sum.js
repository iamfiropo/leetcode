// https://leetcode.com/problems/two-sum/

function twoSum(nums, target) {
  const map = {};
  const length = nums.length;

  for (let i = 0; i < length; i++) {
    const comp = target - nums[i];
    if (comp in map) {
      return [map[comp], i];
    }
    map[nums[i]] = i;
  }
}

twoSum([2, 11, 7, 15], 9);
