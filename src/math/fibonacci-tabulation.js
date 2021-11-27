function fibonacci(num) {
  if (num <= 2) {
    return 1;
  }

  const fibonacciArr = [0, 1, 1];

  for (let i = 3; i <= num; i++) {
    fibonacciArr[i] = fibonacciArr[i - 1] + fibonacciArr[i - 2];
  }

  return fibonacciArr[num];
}

console.log(fibonacci(10));
