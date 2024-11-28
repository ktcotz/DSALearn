const ROMAN_NUMBERS = ["I", "V", "X", "L", "C", "D", "M"];

type ROMAN_NUMBER = (typeof ROMAN_NUMBERS)[number];
const ROMAN_VALUES: Record<ROMAN_NUMBER, number> = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

const isRomanNumber = (char: string): char is ROMAN_NUMBER => {
  return ROMAN_NUMBERS.includes(char as ROMAN_NUMBER);
};

const getRomanValue = (romanNum: string) => {
  if (isRomanNumber(romanNum)) {
    return ROMAN_VALUES[romanNum];
  }

  return 0;
};

export function romanToInt(s: string): number {
  let integer = 0;

  for (let i = 0; i < s.length; i++) {
    const current = getRomanValue(s[i]);
    const nextElement = getRomanValue(s[i + 1]);

    if (current >= nextElement) {
      integer += current;
    } else {
      integer += nextElement - current;
      i++;
    }
  }

  return integer;
}
