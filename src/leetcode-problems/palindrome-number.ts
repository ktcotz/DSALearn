/*
    Założenia : 

    1. Ma sprawdzić czy liczba którą otrzymaliśmy jest palindromem.

    Palindrom number <- Liczba która od początku do końca jest taka sama jak od końca do początku.

    Wymagania : 

    1. Rozwiąż to bez zamieniania na zmienną typu string.

    Pomysł : 

    1. Liczby ujemne od razu są false, nie da się z nich zrobić nic pożytecznego.
    
    2. Pętla i otrzymywanie ostatniej liczby, dodawanie do odpowiedzi, na koniec sprawdzenie czy jest ona poprawna z current liczbą.
*/

export function isPalindrome(x: number): boolean {
  if (x < 0) return false;

  let ans = 0;
  let current = x;

  while (x) {
    ans = ans * 10 + (x % 10);

    x = Math.floor(x / 10);
  }

  return ans === current;
}
