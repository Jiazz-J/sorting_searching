/**
 * @param {string} boxes
 * @return {number[]}
 */
const minOperations = function (boxes) {
  const answers = [];

  for (let i = 0; i < boxes.length; i++) {
    let result = 0;

    for (let j = 0; j < boxes.length; j++) {
      if (i === j) {
        continue;
      }
      if (boxes.charAt(j) === '1') {
        result += Math.abs(j - i);
      }
    }

    answers.push(result);
  }

  return answers;
};

console.log(minOperations('001011'));
