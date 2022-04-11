/**
 * @param {number[]} arr
 * @return {number[]}
 * 
Question: https://leetcode.com/problems/replace-elements-with-greatest-element-on-right-side
 
 Approach: In-place
 Time Complexity: O(n)
 Space Complexity: O(1)
 */
 var replaceElements = function(arr) {
    const lastIndex = arr.length - 1;
    let currMaxValue = arr[lastIndex];
    
    for (let i = arr.length - 1; i >= 0; i--) {
        currValue = arr[i];
        arr[i] = currMaxValue;
        currMaxValue = currMaxValue >= currValue ? currMaxValue : currValue;
    }
    
    arr[lastIndex] = -1;
    
    return arr;
};