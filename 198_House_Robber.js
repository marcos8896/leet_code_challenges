var rob = function(nums) {
  if (nums.length === 0) {
    return 0;
  }

  if (nums.length === 1) {
    return nums[0];
  }

  if(nums.length === 2) {
    return Math.max(...nums);
  }

  const cache = [nums[0], Math.max(nums[0], nums[1])];
  for(let i = 2; i < nums.length; i++) {
    cache[i] = Math.max(nums[i] + cache[i - 2], cache[i - 1]);
  }

  return cache.pop();

};

console.log(rob([2, 1, 9, 40, 1, 1, 3]))