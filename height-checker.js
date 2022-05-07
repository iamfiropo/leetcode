/**
 * @param {number[]} heights
 * @return {number}
 * 
 * Question: https://leetcode.com/problems/height-checker

 Approach: One pass
 Time Complexity: O(n)
 Space Complexity: O(n)
 */
 var heightChecker = function(heights) {
	let count = 0;
	let expectedIdx = 0;
	
	// sort a copy of the input array
	const expectedHgts = [...heights].sort((a, b) => a - b);
	
	for (const height of heights) {
		if (height !== expectedHgts[expectedIdx++]) count++
	}
	
	return count;
};