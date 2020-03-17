/**
 * @param {number} n
 * @return {number}
 * Roughly O(N) with memoization
 */
const climbStairs = (n, savedResults = {}) => {
  if(n in savedResults) return savedResults[n];
  if (n < 0) return 0;
  if(n === 0) return 1;
  savedResults[n] = climbStairs(n - 2, savedResults) + climbStairs(n - 1, savedResults);
  return savedResults[n];
};

// debugger;
const result = climbStairs(5);
console.log('result: ', result);
// debugger;