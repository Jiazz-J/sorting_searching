export function mostDigits(num: number): number {
  if (num === 0) {
    return 1;
  }

  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

export function getMaxDigits(arr: number[]): number {
  let maxDigits = 0;
  for (let i = 0; i < arr.length; i++) {
    maxDigits = Math.max(maxDigits, mostDigits(arr[i]));
  }

  return maxDigits;
}

// console.log(getMaxDigits([12, 23, 12312, 12311]));
