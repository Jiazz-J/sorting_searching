import {mergeSortedArrays} from './merge-sorted-arrays';

export function splitArraySorted(arr: number[]): number[] {
  if (arr.length <= 1) {
    return arr;
  }

  const middle = Math.floor(arr.length / 2);

  return mergeSortedArrays(
    splitArraySorted(arr.slice(0, middle)),
    splitArraySorted(arr.slice(middle, arr.length))
  );
}

console.log(splitArraySorted([1, 11, 10, -1, 44, -90]));
