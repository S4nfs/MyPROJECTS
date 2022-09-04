const longestSubstring = (str) => {

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
    if (!unique.has(str[end])) {
      unique.add(str[end]);
      end++;
      maxLength = Math.max(maxLength, unique.size);
    } else {
      unique.delete(str[end])
      start++;
    }
  }
  return maxLength;
}

console.log(longestSubstring("abcabcbb"));