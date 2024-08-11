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
// Wejście - Dwie pozytywne liczby.
// O(n) time complexity.
// Zadanie : Czy liczby podane mają taką samą ilość poszczególnych liczb w sobie.

const calculateNumbersFrequency = (numbersToCalculate: number) => {
  const frequency: Record<number, number> = {};

  while (numbersToCalculate) {
    const lastNumber = Math.floor(numbersToCalculate % 10);

    const isNumberInFrequency = frequency[lastNumber];

    if (isNumberInFrequency) {
      frequency[lastNumber]++;
    } else {
      frequency[lastNumber] = 1;
    }

    numbersToCalculate = Math.floor(numbersToCalculate / 10);
  }

  return frequency;
};

function sameFrequency(firstNumber: number, secondNumber: number) {
  // Obliczyć ilość poszczególnych liczb i zapisać je do obiektu.
  const firstNumberFrequency = calculateNumbersFrequency(firstNumber);
  const secondNumberFrequency = calculateNumbersFrequency(secondNumber);

  for (const key in firstNumberFrequency) {
    if (firstNumberFrequency[key] !== secondNumberFrequency[key]) return false;
  }

  return true;
  // Sprawdzić ilość poszczególnych liczb.
}

sameFrequency(182, 281); // true
sameFrequency(34, 14); // false
sameFrequency(3589578, 5879385); // true
sameFrequency(22, 222); // false

// Wejście - zmienna liczba argumentów różnego typu.
// O(n) & O(n), Bonus (O n log n) O(1)
// Zadanie : Sprawdź czy w podanych liczbach argumentów są duplikaty.

function areThereDuplicates<T extends string | number | boolean>(
  ...values: T[]
) {
  const frequency: Record<T, number> = {};

  for (let i = 0; i < values.length; i++) {
    const value = values[i];

    frequency[value] ? frequency[value]++ : (frequency[value] = 1);
  }

  for (const key in frequency) {
    const potentialDuplicate = frequency[key];

    if (potentialDuplicate > 1) return true;
  }

  return false;
}

areThereDuplicates(1, 2, 3); // false
areThereDuplicates(1, 2, 2); // true
areThereDuplicates("a", "b", "c", "a"); // true

/*
    MULTIPLE POINTERS PATTERN
*/

// Wejście - tablica liczb posortowanych.
// O(n) time complexity, 0(1) space complexity.
// Zadanie : Policzyć unikalne wartości w tablicy.

function countUniqueValues(numbers: number[]) {
  // Przejście po tablicy za pomocą dwóch pointerów.
  // Sprawdzanie wartości pod pointerami, jeżeli te same to pointer drugi idzie dalej.
  // Jeżeli nie to ustawia na pierwszym pointerze + 1 tą wartość,
  // Na końcu zwraca pointer pierwszy jako counter.

  let left = 0;
  let right = 1;

  while (right <= numbers.length) {
    if (numbers[left] !== numbers[right]) {
      numbers[++left] = numbers[right];
    }

    right++;
  }

  return left;
}

// Wejście : posortowane liczby, target.
// O(n) & O(1).
// Zadanie : Znaleźć czy dwie liczby w tablicy dodane do siebie są równe target.

function averagePair(numbers: number[], target: number) {
  // Pętla po tablicy
  let start = 0;
  let end = numbers.length - 1;

  while (start <= end) {
    const averageSum = (numbers[start] + numbers[end]) / 2;

    if (averageSum === target) return true;
    if (averageSum < target) start++;
    if (averageSum > target) end--;
  }

  return false;
}

averagePair([1, 2, 3], 2.5); // true
averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8); // true
averagePair([-1, 0, 3, 4, 5, 6], 4.1); // false
averagePair([], 4); // false

// Wejście : Dwa stringi
// Zadanie : Sprawdzić czy pierwszy ciąg jest w jakiś sposób podciągiem drugiego ciągu, bez zmieniania jego kolejności.
// O(n+m) & O(1).

function isSubsequence(firstWord: string, secondWord: string) {
  let j = 0;
  for (let i = 0; i < secondWord.length; i++) {
    if (secondWord[i] === firstWord[j]) j++;
  }

  return j === firstWord.length;
}

isSubsequence("hello", "hello world"); // true
isSubsequence("sing", "sting"); // true
isSubsequence("abc", "abracadabra"); // true
isSubsequence("abc", "acb"); // false (order matters)

/*
    SLIDING WINDOW PATTERN
*/

// Wejście : Tablica liczb, target.
// Zadanie : Maksymalna suma liczb długości target.
// O(n) & O(1)

function maxSubarraySum(numbers: number[], target: number) {
  // Pętla po tablicy.
  if (numbers.length < target) return null;
  // Rozszerzanie okna.
  let sum = -Infinity;
  let tempSum = 0;

  for (let i = 0, j = 0; i < numbers.length; i++) {
    tempSum += numbers[i];

    if (target === i - j + 1) {
      sum = Math.max(sum, tempSum);
      tempSum -= numbers[j];
      j++;
    }
  }
}

maxSubarraySum([100, 200, 300, 400], 2); // 700
maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4); // 39
maxSubarraySum([-3, 4, 0, -2, 6, -1], 2); // 5
maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2); // 5
maxSubarraySum([2, 3], 3); // null

// Wejście : tablica liczb pozytywnych, target.
// O(n) & O(1)
// Zadanie : Minimalna długość tablicy która jest równa targetowi, liczby muszą być obok siebie, w przeciwnym wypadku zwróc 0.

function minSubArrayLen(numbers: number[], target: number) {
  let minLength = Infinity;
  let tempSum = 0;
  for (let i = 0, j = 0; i < numbers.length; i++) {
    tempSum += numbers[i];
    while (tempSum >= target) {
      minLength = Math.min(minLength, i - j + 1);
      tempSum -= numbers[j];
      j++;
    }
  }

  return minLength === Infinity ? 0 : minLength;
}

minSubArrayLen([2, 3, 1, 2, 4, 3], 7); // 2 -> because [4,3] is the smallest subarray
minSubArrayLen([2, 1, 6, 5, 4], 9); // 2 -> because [5,4] is the smallest subarray
minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52); // 1 -> because [62] is greater than 52
minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39); // 3
minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55); // 5
minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11); // 2
minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95); // 0

// Wejście - string.
// O(n) complexity time.
// Zadanie : Zwróć najdłuższy podciąg znaków w którym wszystkie znaki są inne.

function findLongestSubstring(str) {
  let longest = 0;
  let seen = {};
  let start = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }
    // index - beginning of substring + 1 (to include current in count)
    longest = Math.max(longest, i - start + 1);
    // store the index of the next char so as to not double count
    seen[char] = i + 1;
  }
  return longest;
}
findLongestSubstring(""); // 0
findLongestSubstring("rithmschool"); // 7
findLongestSubstring("thisisawesome"); // 6
findLongestSubstring("thecatinthehat"); // 7
findLongestSubstring("bbbbbb"); // 1
findLongestSubstring("longestsubstring"); // 8
findLongestSubstring("thisishowwedoit"); // 6

/*
    DIVIDE AND CONQUER PATTERN
*/
