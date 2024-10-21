/*
    Założenia :

    1. Dostajemy tablicę skladającą się tylko z (){}[]
    2. Sprawdzić czy wszystkie elementy się zgadzają, czy po dodaniu elementu kolejnym można go zamknąć i tak aż do końca.

*/

type OPEN_PARENTHESES = "(" | "{" | "[";
type CLOSE_PARENTHESES = ")" | "}" | "]";

const ALL_PARENTHESES: Record<OPEN_PARENTHESES, CLOSE_PARENTHESES> = {
  "(": ")",
  "{": "}",
  "[": "]",
};

export function isValid(s: string): boolean {
  const parentheses = [s[0]];

  for (let i = 1; i < s.length; i++) {
    const lastElement = parentheses[parentheses.length - 1];
    const lastElementParentheses =
      ALL_PARENTHESES[lastElement as OPEN_PARENTHESES];

    if (lastElementParentheses === s[i]) {
      parentheses.pop();
    } else {
      parentheses.push(s[i]);
    }
  }

  return parentheses.length === 0;
}
