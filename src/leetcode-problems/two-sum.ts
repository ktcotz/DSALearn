/*
    Założenia:

    1. Tablica liczb całkowitych.
    2. Target to liczba którą chcemy uzyskać po zsumowaniu dwóch liczb.
    3. Jest możliwe tylko jedno rozwiązanie w obrębie tej samej tablicy i nie mogą być to te same elementy.

    Wymagania:

    1. Lepszy czas złożoności niż O(n^2).

    Pomysł:

    Pomysłem jest stworzenie mapy która będzie przechowywać liczby oraz indeksy im odpowiadające, na podstawie obliczenia targetu - aktualnej liczby indeksowanej, będzie wyszukiwać czy jest podana liczba już w mapie, jeżeli tak to zwraca indeks, w przeciwnym razie dodaje do mapy.
*/

export function twoSum(nums: number[], target: number): number[] {
  const map: Record<number, number> = {};

  for (let i = 0; i < nums.length; i++) {
    const calculatedValue = target - nums[i];

    if (Number.isInteger(map[calculatedValue]) && i !== map[calculatedValue]) {
      return [map[calculatedValue], i];
    }

    map[nums[i]] = i;
  }

  return [0, 0];
}
