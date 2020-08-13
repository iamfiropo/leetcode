// https://leetcode.com/problems/merge-sorted-array/
var merge = function (nums1, m, nums2, n) {
  //declare a variable to sum the total length of the two array
  //create a variable to hold the last item of the first number array nums1
  //create a variable to hold the last item of the second number array nums2
  //iterate over the two arrays simultaneously
  //compare the items of the given arrays, using the total length variable
  //    in step 1 as the condition of the loop
  //break out of the loop when the length of n is lesser than 0 i.e the exit
  //     door of the loop

  let length = m + n;
  let nums1Item = nums1[--m];
  let nums2Item = nums2[--n];

  while (length) {
    if (n < 0) {
      break;
    } else if (nums1Item > nums2Item) {
      nums1[--length] = nums1Item;
      nums1Item = nums1[--m];
    } else {
      nums1[--length] = nums2Item;
      nums2Item = nums2[--n];
    }
  }

  return nums1;
};

merge([3, 4, 31, 0, 0, 0], [4, 6, 30]);
