/**
 * Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.
 * 
 * @example:
 * Input: 38
 * Output: 2 
 * Explanation: The process is like: 3 + 8 = 11, 1 + 1 = 2. Since 2 has only one digit, return it.
 * 
 * @param {number} num
 * @return {number}
 */
function addDigits(num) {
  while(true) {
      const numbers = num.toString().split("").map(Number);
      let sum = 0;
      numbers.forEach(number => sum += number);
      
      if(sum < 10) 
          return sum;
      else
          num = sum;
  } 
};

console.log(addDigits(38));