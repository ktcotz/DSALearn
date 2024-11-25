# Data Structures

Istnieje bardzo dużo struktur danych które są w danych przypadkach bardziej odpowiednie od innych, są bardziej optymalne i bardziej pasują pod konkretne rozwiązanie.

Przykładowe Data Structures :

- Singly Linked List
- Double Linked List
- Queues
- Trees
- Graphs
- Binary Max Heap
- Binary Min Heap
- Hash Tables
  ...

Omówione data structures w projekcie :

- [x] Singly Linked List
- [x] Doubly Linked List
- [ ] Stacks

## Singly Linked List

Czym jest Singly Linked List - jest to lista powiązana w której każdy węzeł składa się z wartości i pointera do następnego węzła. Singly Linked List składa się z "head" i "tail" które określają początek oraz koniec naszego singly linked list.

Czym się różni od tablicy? Tablica posiada indeksy, lista nie posiada indexów.

Jak dostać się do kolejnego elementu w liście? Poprzez odwoływanie się do pointera next w każdym elemencie.

## Doubly Linked List

Czym jest Doubly Linked List - jest to bardzo podobna struktura danych do single linked list, z różnicą dzięki której mamy możliwość odwołania się do poprzedniego node'a.

## Stacks

Czym jest Stack - jest to struktura danych która działa jak stos.

Stack działa na zasadzie LIFO (Last In First Out).

Stack posiada 3 metody :

- push
- pop
- peek

## Queue

Czym jest Queue - jest to struktura danych która działa jak kolejka.

Queue działa na zasadzie FIFO (First in First Out).

Jest bardzo podobna w działaniu do stack, ale jak nazwa mówi FIFO nie LIFO.

## Binary Search Tree

Czym jest BST - jest to struktura danych która składa się z kolejnych po sobie nodeów.
BST charakteryzuje się tym, że każdy node, ma swoje maksymalnie 2 odnogi.

Generalnie struktura Tree odpowiada strukturze drzewa i gałęzi (super analogia..)

Czy wszystko jest drzewem? Drzewem jest tylko to co ma jeden wierzchołek (Root).

Zasady poprawnego drzewa BST:

1. Każdy rodzic może mieć maksymalnie 2 dzieci.
2. Każdy node z lewej strony rodzica musi być mniejsza od rodzica.
3. Każdy node z prawej strony rodzica musi być większy od rodzica.
