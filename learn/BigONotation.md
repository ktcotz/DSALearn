# Big O Notation

Big O Notation jest nie zwykle ważny w momencie w którym chcemy dowiedzieć się nieco więcej na temat naszego algorytmu pod względem czasu i miejsca wykonania.

## O co chodzi z tym Big O Notation?

Dzięki Big O Notation możemy opisać nasz algorytm w jaki sposób on działa, ile czasu zajmuje jego wykonanie w porównaniu do wykonywania czynności, a także ile zajmuje przestrzeni w pamięci. Zamiast opisywać algorytm swoimi własnymi słowami, Big O udostępnia kilka możliwości opisania które są uniwersalne dla każdego i zrozumiałe dla każdego.

Możemy napisać każdy problem na wiele różnych sposobów, ale każdy sposób będzie się różnił nieco implementacją i w większości przypadków różnił także czasem i pamięcia używaną.

**Najlepiej napisać kod który jest niezwykle szybki i zajmuje bardzo mały pamięci** - ale nie zawsze jest to takie proste, ważne, żeby do tego dążyć.

- [x] Jak opisać czas
- [ ] Jak opisać przestrzeń

## Jak opisywać czas, praktyczne opisywanie czasu.

**Przykład**
Dodawanie liczb od 1 do n.

```
    1. Stworzenie pętli od 1 do n, dodanie każdej liczby do zmiennej sum i zwrócenie. (Operacji: n)
    2. Dodanie liczb za pomocą n*(n+1)/2 (Operacji : 1)

```

## O co chodzi z tematem operacji?

Każda maszyna na której wykonujemy kod może ten kod wykonywać w innym czasie, każdy będzie miał inny wynik, jak to określić dla każdego?
Z użyciem notacji Big O która sprawdza ile operacji ma do wykonania.

W przykładzie 1 ilość operacji wynosi (n+,n=) (N operacji)
W przykładzie 2 ilość operacji wynosi 3 (+ \* /) (3 operacje)

W Big O nie opisujemy kodu za pomocą opisów typu 10 operacji, 30n operacji, wszystko się sprowadza do minimalizmu.

3 operacje - O(1).
N operacji? - O(n).

**Tak się opisuje nasz kod za pomocą Big O Notation**.

Możliwości opisania Big O

Stałe operacje - O(1)
N operacji - O(n)
N operacji w n operacjach - O(n^2)
Logarytmiczne operacje - O(log(n))

## Opisanie przestrzeni

Przestrzeń użycia algorytmu opisujemy w ten sam sposób, każda zmienna zajmuje daną ilość miejsca, na tej podstawie wiemy ile zajmuje pamięci.

Zmienna typu prymitywnego zajmuje O(1).
Zmienna typu referencyjnego zajmuje O(n).
