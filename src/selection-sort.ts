export function selectionSort(arr: number[]) {
  for (let i = 0; i < arr.length - 1; i++) {
    let min = arr[i];
    let minIndex = i;
    let isChanged = false;

    for (let j = i; j < arr.length; j++) {
      if (min > arr[j]) {
        isChanged = true;
        min = arr[j];
        minIndex = j;
      }
    }

    if (isChanged) {
      swap(arr, i, minIndex);
    }
  }
}

function swap(arr: number[], index: number, index2: number) {
  [arr[index], arr[index2]] = [arr[index2], arr[index]];
}

/* const arr = [10, 2, 1, 0, 77, 12, 77, 12, -10];
selectionSort(arr);

console.log(arr);
 */
