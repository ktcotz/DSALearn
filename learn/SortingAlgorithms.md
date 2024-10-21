# Sorting

Przestawienie jakieś kolekcji w taki sposób aby itemy spełniały nasze wymagania co do kolejności.

**Sortowanie od największej do najmniejszej**
**Sortowanie po ilości zjedzonego jedzenia**

- [x] Bubble Sort
- [x] Selection Sort
- [x] Insertion Sort

## Bardziej szalone algorytmy sortowania

- [x] Merge Sort
- [x] Quick Sort
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

## Quick Sort

Quick Sort - działa na zasadzie pivota, który określa zależność gdzie z lewej strony układamy liczby mniejsze od niego a z prawej większe.
Działa to na zasadzie rekurencji.

## Radix Sort

Radix Sort - specjalny rodzaj algorytmu sortującego który działa na tablicach typu liczbowego.

Różni się on od standardowych algorytmów tym, że nie porównuje ze sobą dwóch liczb.

Dodaje on konkretne liczby do bucketów które są ponumerowane od 0-9 i zważywszy na kolejność liczb dodaje oraz wyciąga je w coraz to bardziej odpowiedniej formie.

Radix Sort zazwyczaj działa na złożoności O(nk)
