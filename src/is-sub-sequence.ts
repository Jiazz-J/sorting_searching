function isSubsequence(str1: string, str2: string) {
  // good luck. Add any arguments you deem necessary.

  // Check length
  if (str1.length > str2.length) {
    return false;
  }

  let i = 0;

  for (const ch of str2) {
    if (str1.charAt(i) === ch) {
      i++;
    }
  }

  return i === str1.length;
}

console.log(isSubsequence('hello', 'hello world')); // true
console.log(isSubsequence('sing', 'sting')); // true
console.log(isSubsequence('abc', 'acb')); // true

Array.range()
