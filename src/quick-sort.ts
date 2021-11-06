import {pivotHelper} from './pivot-helper';

export function quickSort(arr: number[], left = 0, right = arr.length) {
  if (left < right) {
    const correctPivotIndex = pivotHelper(arr, left, right);

    quickSort(arr, left, correctPivotIndex - 1);
    quickSort(arr, correctPivotIndex + 1, right);
  }
  return arr;
}

console.log(quickSort([12, 32, 4, 1, 4, -4]));
