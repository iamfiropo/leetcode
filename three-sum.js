/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function threeSum(nums) {
  /**
   * create an empty array variable to store the result
   * call array sort method on the input
   * iterate over the sorted input and
   * check for the outer duplicate item by ensuring the current item is greater than the previous item
   * create a start pointer variable
   * create an end pointer variable
   * create an inner while loop with a condition of start lesser than end as both pointer are going inward
   * check if the summation of the array item is equal to 0, push to result array
   * check if the summation is lesser than target, then increment start pointer and also...
   * check for the inner duplicate item by comparing the current item with the next pointing item and increment/decrement as the case may be
   *
   */

  const result = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    // check for the outer duplicate item by ensuring the current item is greater than the previous item
    if (i === 0 || nums[i] > nums[i - 1]) {
      let startPointer = i + 1;
      let endPointer = nums.length - 1;

      while (startPointer < endPointer) {
        let sum = nums[i] + nums[startPointer] + nums[endPointer];

        if (sum === 0) {
          result.push([nums[i], nums[startPointer], nums[endPointer]]);
        }

        // driving both pointers inward
        if (sum < 0) {
          const currentStartPointer = startPointer;

          while (
            nums[startPointer] === nums[currentStartPointer] &&
            startPointer < endPointer
          ) {
            startPointer++;
          }
        } else {
          const currentEndPointer = endPointer;

          while (
            nums[endPointer] === nums[currentEndPointer] &&
            startPointer < endPointer
          ) {
            endPointer--;
          }
        }
      }
    }
  }

  return result;
}
