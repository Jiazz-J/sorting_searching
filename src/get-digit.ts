export function getDigit(num: number, place: number): number {
  for (let i = 0; i < place; i++) {
    num = Math.floor(num / 10);
  }

  return num % 10;
}

// console.log(getDigit(1234567, 0));

// console.log(getDigit(3452, 20));

/* 2202,  1 -- 0
12,0 ---- 2 */
