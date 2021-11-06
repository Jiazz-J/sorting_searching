export function pivotHelper(arr: number[], start = 0, end = arr.length) {
  const pivot = arr[start];

  let pivotIndex = start;
  for (let j = start + 1; j < end; j++) {
    if (pivot > arr[j]) {
      pivotIndex++;
      swap(arr, pivotIndex, j);
    }
  }

  swap(arr, start, pivotIndex);

  return pivotIndex;
}

function swap(arr: number[], index: number, index2: number) {
  [arr[index], arr[index2]] = [arr[index2], arr[index]];
}

/* const arr = [23, 9, 18, 32, 61, 50];
console.log(pivotHelper(arr));
console.log(arr); */

/* console.log(pivotHelper([5, 44, 23]));
console.log(pivotHelper([5, 2, 1])); */

/*
[5,1,2,10,8]

pivot-5
i=1,j=1
pivot = greater --- increment i and j
i=2 j=2
pivot greater inc i and j
i=3, j=3
pivot less inc j
j=4
pivot less inc j
exhasut
i=3
return i */
