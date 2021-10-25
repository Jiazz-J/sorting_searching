export function countUniqueValues(arr: number[]) {
  let count = 0;

  let first;
  let second;
  for (const i of arr) {
    second = i;

    if (second !== first) {
      first = second;
      count++;
    }
  }

  return count;
}
