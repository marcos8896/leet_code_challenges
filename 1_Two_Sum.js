/**
 * Brute force
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSumNoOptimal = function(nums, target) {
  let result = [];
  let found = false;
  for(let i = 0; i < nums.length && found === false; i++) {
      for(let j = 1; j < nums.length  && found === false; j++) {
          if (nums[i] + nums[j] === target && i !== j) {
              result.push(i, j);
              found = true;
          }
      }
  }
  return result;
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let result;
  let cacheMap = {};
  let found = false;
  
  nums.forEach((num, index) => {
      if (num in cacheMap) {
          cacheMap[num].push(index);
      } else {
          cacheMap[num] = [index];
      }
  });

  for(let i = 0; i < nums.length && !found; i ++) {
      const num = nums[i];
      const subtractionResult = target - num; 
      
      if(!(subtractionResult in cacheMap)) continue;

      let secondIndex;
      for(el of cacheMap[subtractionResult]) {
        if (el !== i) {
          secondIndex = el;
          break;
        }
      }

      if (secondIndex) {
        result = [i, secondIndex];
        found = true;
      }
  }
  
  return result;  
};

const result = twoSum([2,5,5,11], 10);
console.log('result: ', result);