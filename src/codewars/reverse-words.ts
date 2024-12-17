export function reverseWords(str: string): string {
  let result = "";
  let reversed = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      result += reversed.split("").reverse().join("");
      result += str[i];
      reversed = "";
    } else {
      reversed += str[i];
    }
  }

  return `${result}${reversed}`;
}
