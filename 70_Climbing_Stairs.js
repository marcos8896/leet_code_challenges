/**
 * @param {number} n
 * @return {number}
 * Roughly O(N) with memoization
 */
const climbStairsRecursive = (n, savedResults = {}) => {
  if(n in savedResults) return savedResults[n];
  if (n < 0) return 0;
  if(n === 0) return 1;
  savedResults[n] = climbStairsRecursive(n - 2, savedResults) + climbStairsRecursive(n - 1, savedResults);
  return savedResults[n];
};


/**
 * @param {number} n
 * @return {number}
 * O(N) Space and Time
 */
const climbStairsBottomUpNoSpaceOverhead = (n) => {
  if (n < 0) return 0;
  if(n >= 0 && n < 2) return 1;

  const array = [1, 1, undefined];

  for(let i = 2; i < n + 1; i++) {
    array[2] = array[0] + array[1];
    array.shift();
  }

  return array[array.length - 1];
};

// debugger;
// const result = climbStairsRecursive(5);
const result = climbStairsBottomUpNoSpaceOverhead(6);
console.log('result: ', result);
// debugger;