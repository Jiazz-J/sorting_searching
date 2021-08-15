/* eslint-disable @typescript-eslint/ban-ts-comment */

function merge(left: number[], right: number[]): number[] {
  const arr: number[] = [];
  // Break out of loop if any one of the array gets empty
  while (left.length && right.length) {
    // Pick the smaller among the smallest element of left and right sub arrays
    // @ts-ignore
    arr.push(left[0] < right[0] ? left.shift() : right.shift());
  }

  // Concatenating the leftover elements
  // (in case we didn't go through the entire left or right array)
  return [...arr, ...left, ...right];
}

export function mergeSort(array: number[]): number[] {
  const half = array.length / 2;

  // Base case or terminating case
  if (array.length < 2) {
    return array;
  }

  const left = array.splice(0, half);
  return merge(mergeSort(left), mergeSort(array));
}
