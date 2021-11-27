function fibonacci(num, mem = []) {
  if (mem[num] !== undefined) {
    return mem[num];
  }

  if (num <= 2) {
    return 1;
  }

  mem[num] = fibonacci(num - 1, mem) + fibonacci(num - 2, mem);

  return mem[num];
}

console.log(fibonacci(100));
