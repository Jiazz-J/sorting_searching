export function removeElement(nums: number[], val: number): number {
  if (!nums.length) {
    return 0;
  }

  let i = 0;

 

 
  for (let j = 1; j < nums.length; j++) {
    if (nums[i] === val) {
      nums[i] = nums[j];
      nums[j] = val;
    }

    if (nums[j] !== val) {
      j = j - 1;
      continue;
    }
    i++;
  }

  return i + 1;
}
