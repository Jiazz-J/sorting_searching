import {getDigit} from './get-digit';
import {getMaxDigits} from './most-digits';

export function radixSort(arr: number[]): number[] {
  const maxDigits = getMaxDigits(arr);

  for (let i = 0; i < maxDigits; i++) {
    const digitBucket = Array.from({length: 10}, (): number[] => []);

    for (let j = 0; j < arr.length; j++) {
      const digitCount = getDigit(arr[j], i);
      digitBucket[digitCount].push(arr[j]);
    }

    arr = ([] as number[]).concat(...digitBucket);
  }

  return arr;
}

console.log(radixSort([32, 23, 1, 34, 343, 112]));
