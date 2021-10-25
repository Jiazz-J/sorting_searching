function isPalindrome(s: string): boolean {
  const str = s.replace(/[^a-z0-9]/gi, '').toLocaleLowerCase();

  console.log(str);

  for (let i = 0, j = str.length - 1; i < str.length / 2; i++, j--) {
    if (str.charAt(i) !== str.charAt(j)) {
      return false;
    }
  }
  return true;
}

console.log(isPalindrome('A man, a plan, a canal: Panama'));

[1, 2, 1].findIndex(val => val === 1);
