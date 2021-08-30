/*

Accepted
Runtime: 108 ms
Your input
["flower","flow","flight"]
Output
"fl"
Expected
"fl"




*/

function longestCommonPrefix(strs: string[]): string {
  let commonPrefix = strs[0];

  for (let i = 1; i < strs.length; i++) {
    commonPrefix = commonPart(commonPrefix, strs[i]);

    if (commonPrefix === '') {
      return '';
    }
  }
  return commonPrefix;
}

function commonPart(anticipatedStr: string, str: string): string {
  const len = Math.min(anticipatedStr.length, str.length);

  let index = 0;

  for (let i = 0; i < len; i++) {
    if (anticipatedStr[i] === str[i]) {
      index++;
    } else {
      break;
    }
  }

  if (index === 0) {
    return '';
  } else {
    return anticipatedStr.substr(0, index);
  }
}

// same or change in prefix or single element
// else return empty
