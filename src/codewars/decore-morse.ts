import { MORSE_CODE } from "./preloaded";
export function decodeMorse(morseCode: string): string {
  const morseCodeCharacters = morseCode.trim().split(" ");
  let result = "";

  for (let i = 0; i < morseCodeCharacters.length; i++) {
    if (morseCodeCharacters[i] === "" && morseCodeCharacters[i + 1] === "") {
      result += " ";
      i++;
    }

    const morseDecode = MORSE_CODE[morseCodeCharacters[i]];

    if (morseDecode) {
      result += MORSE_CODE[morseCodeCharacters[i]];
    }
  }

  return result;
}
