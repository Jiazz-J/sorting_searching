export function isValid(s: string): boolean {
  const len = s.length;

  if (len % 2 !== 0) {
    return false;
  }

  const oppositeMap = new Map();

  oppositeMap.set(')', '(');
  oppositeMap.set('}', '{');

  oppositeMap.set(']', '[');

  const strs = [];

  strs.push(s.charAt(0));

  for (let i = 1; i < len; i++) {
    const ch = s.charAt(i);
    const strsLen = strs.length;
    if (strsLen && oppositeMap.get(ch) === strs[strsLen - 1]) {
      strs.pop();
    } else {
      strs.push(ch);
    }
  }

  return !strs.length;
}
