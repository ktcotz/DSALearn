# Sorting

Przestawienie jakieś kolekcji w taki sposób aby itemy spełniały nasze wymagania co do kolejności.

**Sortowanie od największej do najmniejszej**
**Sortowanie po ilości zjedzonego jedzenia**

- [x] Bubble Sort
- [x] Selection Sort
- [x] Insertion Sort

## Bardziej szalone algorytmy sortowania

- [x] Merge Sort
- [] Quick Sort
- [] Radix Sort

## Bubble Sort

Sortowanie Bąbelkowe - większa liczba "bąbelkuje" wyżej.
Przechodzi po tablicy elementów i zamienia elementy aż największa liczba nie znajdzie się na ostatnim miejscu.

Działający w złożoności O(n^2).

Pomysłami optymalizacyjnymi są:

- Pętla kończąca się na i-1 elemencie, ostatni element jest już posortowany.
- No Swaps syntax, który zamienia elementy które nie zostały zamienione.

## Selection Sort

Selection Sort - układanie najmniejszych elementów na początku tablicy i zamienianie z aktualnie porównywanym elementem.

Zazwyczaj działa w złożoności O(n^2).

## Insertion Sort

Insertion Sort - wstawia dokładnie elemnent w dokładne miejsce w którym powinno być.

Zazwyczaj działa w złożoności O(n^2).

## Merge Sort

Merge Sort - działa głównie na rekurencji która rozszerza główną tablicę na wiele małych podtablic i nastepnie je łączy w całą spójną posortowaną tablicę.

Merge Sort zazwyczaj działa na złożoności O(nlogn)
