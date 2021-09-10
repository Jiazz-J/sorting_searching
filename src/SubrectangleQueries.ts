function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
  const maxValue = candies.reduce((a, b) => Math.max(a, b));

  const result = [];

  for (let i = 0; i < candies.length; i++) {
    if (extraCandies + candies[i] >= maxValue) {
      result.push(true);
    } else {
      result.push(false);
    }
  }

  return result;
}
