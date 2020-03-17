/**
 * @param {number} n
 * @return {number}
 */
const climbStairs = (n) => {
  if (n < 0) return 0;
  if(n === 0) return 1;

  return climbStairs(n - 2) + climbStairs(n - 1);
};

// debugger;
const result = climbStairs(40);
console.log('result: ', result);
// debugger;