function binaryExponentiation(base, exponent) {
  let res = 1;
  while (exponent > 0) {
    if (exponent % 2 === 1) {
      res = res * base;
    }

    base = base * base;
    exponent = Math.floor(exponent / 2);
  }
  return res;
}

console.log(binaryExponentiation(2, 7));
