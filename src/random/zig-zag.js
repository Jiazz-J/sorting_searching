/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
const convert = function (s, numRows) {
  if (numRows === 1) {
    return s;
  }

  let result = '';

  const steps = numRows - 2;
  const s_len = s.length;
  const r_steps = numRows + steps;

  for (let i = 0; i < numRows; i++) {
    if (i === 0 || i === numRows - 1) {
      let start = i;

      while (start < s_len) {
        result += s.charAt(start);
        start += r_steps;
      }
    } else {
      const j = r_steps - i * 2;

      const k = r_steps - j;

      let count = 0;
      for (let start = i; start < s_len; ) {
        if (count % 2 === 0) {
          result += s.charAt(start);
          start += j;
        } else {
          result += s.charAt(start);
          start += k;
        }

        count++;
      }
    }
  }

  return result;
};

const convert_ = function (s, numRows) {
  const len = s.length;

  if (numRows < 2 || len < numRows) {
    return s;
  }

  const rows = new Array(numRows).fill('');

  let reverse = false;

  let count = 0;

  for (let i = 0; i < len; i++) {
    rows[count] += s[i];

    reverse ? count-- : count++;

    if (count === numRows - 1 || count === 0) {
      reverse = !reverse;
    }
  }

  return rows.join('');
};

console.log(convert_('PAYPALISHIRING', 4));
console.log(convert('PAYPALISHIRING', 4));
