/**
 * @param {number[][]} points
 * @param {number[][]} queries
 * @return {number[]}
 */
const countPoints = function (points, queries) {
  const answers = [];

  for (let i = 0; i < queries.length; i++) {
    let centerX = Math.abs(queries[i][0]);
    let centerY = Math.abs(queries[i][1]);
    let radius = queries[i][2];

    let count = 0;
    for (let j = 0; j < points.length; j++) {
      const x = Math.abs(points[j][0]);
      const y = Math.abs(points[j][1]);

      const distance = Math.sqrt(
        Math.pow(centerX - x, 2) + Math.pow(centerY - y, 2)
      );

      if (distance <= radius) {
        count++;
      }
    }

    answers.push(count);
  }
  return answers;
};

console.log(
  countPoints(
    [
      [1, 3],
      [3, 3],
      [5, 3],
      [2, 2],
    ],
    [
      [2, 3, 1],
      [4, 3, 1],
      [1, 1, 2],
    ]
  )
);
