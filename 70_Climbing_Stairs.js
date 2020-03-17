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
const climbStairsBottomUp = (n) => {
  if (n < 0) return 0;
  if(n >= 0 && n < 2) return 1;

  const array = [1, 1];
  while(array.length < n + 1) array.push(undefined);

  for(let i = 2; i < n + 1; i++) {
    array[i] = array[i - 2] + array[i - 1];
  }

  return array[array.length - 1];
};

// debugger;
// const result = climbStairsRecursive(5);
const result = climbStairsBottomUp(6);
console.log('result: ', result);
// debugger;