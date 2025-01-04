/*
  My Solution Approach : 
  const temp: string[] = [];
  let length = 0;

  for (let i = 0; i < s.length; i++) {
    const isInsideTemp = temp.includes(s[i]);

    if (!isInsideTemp) {
      temp.push(s[i]);
      length = Math.max(length, temp.length);
    }

    if (isInsideTemp) {
      length = Math.max(length, temp.length);

      const firstIndexOfAppearance = temp.indexOf(s[i]);

      temp.splice(0, firstIndexOfAppearance + 1);
      temp.push(s[i]);
    }
  }

  return length;

*/

export function lengthOfLongestSubstring(s: string): number {
  /* Optimal Approach */

  const seen: Record<string, number> = {};
  let start = 0;
  let maxLength = 0;

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }

    maxLength = Math.max(maxLength, i - start + 1);

    seen[char] = i + 1;
  }

  return maxLength;
}
