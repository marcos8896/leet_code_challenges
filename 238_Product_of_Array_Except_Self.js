/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function productExceptSelfWithoutDivision(nums) {
  const left = [1];
  const right = Array(nums.length - 1);
  const result = [];
  right.push(1);
  for(let j = 1; j < nums.length; j++) {
      left.push(left[j-1] * nums[j-1]);
  }
  
  for(let i = nums.length - 1; i > 0; i--) {
      right[i-1] = (right[i] * nums[i]);
  }

  for(let i = 0; i < nums.length; i++) {
    result.push(left[i] * right[i]);
  }

  return result;
};

productExceptSelf([4,5,1,8,2]);