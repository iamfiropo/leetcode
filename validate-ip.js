function validateIP(ip) {
  /**
	@param ip: string
	@return: boolean
  
  input: 0-255 && "023.22.35.0"
  output: true or false
  
  convert the string into an array
  check each string item and see if each combination is between 0-255
  check each string item and see if when splitted, it's four group of items
  check each string item and see if each group of item is an integer
  // [12, 34, 5, 6]
	*/

  // your code goes here

  const result = ip.split(".");

  if (result.length < 4 && result.length > 4) {
    return false;
  }

  let counter = 0;
  let isDigit = (digit) => digit == "0" || Number(digit);

  for (let i = 0; i < result.length; i++) {
    if (
      Number(result[i]) >= 0 &&
      Number(result[i]) <= 255 &&
      result[i] !== "" &&
      typeof Number(result[i]) !== NaN &&
      result[i].split("").every((digit) => isDigit(digit))
    ) {
      counter = counter + 1;
    }
  }

  return counter === 4 ? true : false;
}

console.log(validateIP("192.168.0.1"));

// Time complexity - O(n) - Linear time
// Space complexity - O(n) - Linear time
