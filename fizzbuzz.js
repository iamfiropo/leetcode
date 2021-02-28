/**
 * @param {number} n
 * @return {string[]}
 
 Question: https://leetcode.com/problems/fizz-buzz
 
 Approach: Naive Approach
 Time Complexity: O(n)
 Space Complexity: O(n)
 */
var fizzBuzz = function (n) {
  let result = [];

  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result.push("FizzBuzz");
    } else if (i % 3 === 0) {
      result.push("Fizz");
    } else if (i % 5 === 0) {
      result.push("Buzz");
    } else {
      result.push(i.toString());
    }
  }

  return result;
};

/**
 * @param {number} n
 * @return {string[]}
 
 Approach: String Concatenation
 Time Complexity: O(n)
 Space Complexity: O(n)
 */
var fizzBuzz = function (n) {
  let result = [];

  for (i = 1; i <= n; ++i) {
    let divisibleBy3 = i % 3 === 0;
    let divisibleBy5 = i % 5 === 0;

    let str = "";

    if (divisibleBy3) str += "Fizz";
    if (divisibleBy5) str += "Buzz";
    if (str === "") str += i;

    result.push(str);
  }

  return result;
};

/**
 * @param {number} n
 * @return {string[]}
 
 Approach: HashTable
 Time Complexity: O(n)
 Space Complexity: O(n)
 */
var fizzBuzz = function (n) {
  let result = [];

  let map = { 3: "Fizz", 5: "Buzz" };

  for (i = 1; i <= n; i++) {
    str = "";

    for (prop in map) if (i % Number(prop) === 0) str += map[prop];
    if (str === "") str += i;

    result.push(str);
  }

  return result;
};
