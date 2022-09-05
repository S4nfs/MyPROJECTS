const lengthOfLongestSubstring = (str) => {

  //Sliding window
  if (!str) {
    return 0;
  }
  //pointers
  let end = 0;
  let start = 0;
  let maxLength = 0;

  const unique = new Set();

  while (end < str.length) {
    if (unique.has(str[end])) {
      unique.delete(str[start++])
    } else {
      unique.add(str[end++]);
      maxLength = Math.max(maxLength, unique.size);
    }
  }
  return maxLength;
}

console.log(lengthOfLongestSubstring("pwwkew"));