export function canConstruct(s: string, k: number): boolean {
  if (s.length < k) return false;

  const frequency: Record<string, number> = {};

  for (let i = 0; i < s.length; i++) {
    frequency[s[i]] ? frequency[s[i]]++ : (frequency[s[i]] = 1);
  }

  const odds = Object.values(frequency).filter((value) => value % 2 !== 0);

  return odds.length <= k;
}
