/*
    FREQUENCY COUNTER PATTERN
*/

const calculateWordCharacters = (word: string) => {
  const count: Record<string, number> = {};

  for (let char = 0; char < word.length; char++) {
    const wordChar = word[char];
    const isCharInsideCount = count[wordChar];

    if (isCharInsideCount) {
      count[wordChar]++;
    } else {
      count[wordChar] = 1;
    }
  }

  return count;
};

// 2 stringi.
// Zadanie: Sprawdzić czy drugi string jest anagramem pierwszego.
// Anagram: słowo które jest takie same jak pierwsze tylko ma inne znacznie (cinema,iceman).
// Tylko małe znaki, O(n) complexity time.

function validAnagram(firstWord: string, potentialyAnagram: string) {
  // Jeżeli puste to zwróć true.

  if (firstWord === "" || potentialyAnagram === "") return true;

  // Jeżeli nie są tej samej długości to zwróć false.
  if (firstWord.length !== potentialyAnagram.length) return false;

  // Sprawdź ilość znaków w każdym stringu.
  const firstWordCount = calculateWordCharacters(firstWord.toLowerCase());
  const potentialyAnagramCount = calculateWordCharacters(
    potentialyAnagram.toLowerCase()
  );

  // Sprawdź czy ta sama ilość znaków jest w jednym i drugim

  for (const key in firstWordCount) {
    const firstWordKeyValue = firstWordCount[key];
    const potentialyAnagramKeyValue = potentialyAnagramCount[key];

    if (firstWordKeyValue !== potentialyAnagramKeyValue) return false;
  }

  return true;
}

/*
    MULTIPLE POINTERS PATTERN
*/

/*
    SLIDING WINDOW PATTERN
*/

/*
    DIVIDE AND CONQUER PATTERN
*/
