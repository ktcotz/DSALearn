# Recursion

Rekurencja dosłownie oznacza odwoływanie się funkcji do samej siebie.
Na podstawie danych wykonuje funkcję i jako zwrot tej funkcji dajemy inny argument który jest w stanie kontynuować proces.

## O co chodzi z kontynuowaniem procesu?

Najważniejsze w rekurencyjnej funkcji jest posiadanie stanu kończącego. Każda rekurencyjna funkcja musi posiadać tzw. warunek zakańczający tą o to rekurencję (pusta tablica, pusty string..).

Argumentem funkcji musi być zawsze argument który się zmienia, nie możę być to kopia bo wpadniemy w nieskończoną pętle.

## Czy pisać kod rekurencyjnie?

Więcej widzi się pisania kodu iteracyjnego niż rekurencyjnego, ale czasami rekurencja przydaje się w nie których przypadkach zadań albo najlepiej się sprawdza w niektórych strukturach danych takich jak Tree..

## Co zwracać z funkcji rekurencyjnej?

Czasami jest sytuacja że nie zwracamy nic, ale najczęściej będziemy coś z niej zwracać. Zwracanie z takiej funkcji na podstawie jej, zapisuje się w jako return fn -> return fn(n) => return fn(n) aż do bazowego warunku kończącego.

Najłatwiejszy sposób zrozumowania jest w tym przykładzie

**Sum range**

sumRange(6){}

Powtarzajac naszą funkcję z arguentami --6,--5,--4,--3 otrzymujemy taką wiązke:

`return sumRange(6) + sumRange(5) + sumRange(4) + sumRange(3)...`
`return 6+5+4+3+2+1... = 21`

## Najczęstsze problemy

- [x] Warunek kończący
- [x] Zwracanie czegoś

**Warunek kończący funkcję - musi się znaleźć zawsze!**
**Zwracanie - Często zapominamy zwracać z funkcji, dane się nie zapiszą.**

## Metoda pomocnicza

Metoda pomocnicza mocno upraszcza pracę nad funkcjami rekurencyjnymi, tworzymy w funkcji rekurencyjnej kolejną funkcję którą będziemy wywoływać.
W ten sposób możemy stworzyć coś na wzór outerScopedVariable którą będziemy modyfikować.
