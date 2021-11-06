export function mergeSortedArrays(arr: number[], arr2: number[]) {
  const sortedArray = [];

  let i = 0;
  let j = 0;
  while (i < arr.length && j < arr2.length) {
    if (arr[i] < arr2[j]) {
      sortedArray.push(arr[i]);
      i++;
    } else {
      sortedArray.push(arr2[j]);
      j++;
    }
  }

  while (i < arr.length) {
    sortedArray.push(arr[i]);
    i++;
  }

  while (j < arr2.length) {
    sortedArray.push(arr2[j]);
    j++;
  }

  //   console.log(sortedArray);

  return sortedArray;
}

mergeSortedArrays([1, 2, 11, 22, 55, 147], [1, 2]);
