/*
    Założenia : 

    1. Dostajemy liczbę typu roman i mamy ją przekonwertować do typu integer.
    2. Liczby sumujemy poprzez ich wartość, w momencie kiedy wartość jest mniejsza niż wartość kolejnego, musimy odjąć od nich swoją wartość.

    Pomysł :

    1. Dodawanie liczb, jeżeli mniejsza niż kolejna to dodanie ich substrakcji i dodanie licznika o 1 aby obie przeskoczyć.
*/

const ROMAN_VALUES: Record<string, number> = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

export function romanToInt(s: string): number {
  let toInteger = 0;

  for (let i = 0; i < s.length; i++) {
    const currentValue = ROMAN_VALUES[s[i]];
    const nextValue = ROMAN_VALUES[s[i + 1]];

    if (currentValue >= nextValue || nextValue === undefined)
      toInteger += currentValue;

    if (currentValue < nextValue) {
      toInteger += nextValue - currentValue;
      i++;
    }
  }

  return toInteger;
}
