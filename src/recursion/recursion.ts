const countDown = (num: number) => {
  if (num === 0) {
    console.log("Koniec odliczania");
    return;
  }
  console.log(`Pozostało : ${num} sekund`);

  return countDown(--num);
};

const sumRange = (num: number) => {
  if (num === 0) return 0;

  return num + sumRange(--num);
};

// Practice

// Wejście : liczba do pomnożenia, liczba ile razy pomnożyć.
// Zadanie : Pomnóż liczbę 1 tyle razy ile wynosi numer liczby drugiej.

function power(num: number, exponent: number) {
  // Base case.
  if (exponent === 0) return 1;

  return num * power(num, --exponent);
}

power(2, 0);
power(2, 2);
power(2, 4);

// Wejście : liczba całkowita.
// Zadanie : Oblicz silnię z liczby.

function factorial(num: number) {
  if (num === 1) return 1;

  return num * factorial(--num);
}

factorial(1); // 1
factorial(2); // 2
factorial(4); // 24
factorial(7); // 5040

const productOfArray = (numbers: number[]) => {
  if (numbers.length === 0) return 1;

  const [item, ...rest] = numbers;

  return item * productOfArray(rest);
};

productOfArray([1, 2, 3]); // 6
productOfArray([1, 2, 3, 10]); // 60

function fib(num: number) {
  if (num <= 2) return 1;

  return fib(num - 1) + fib(num - 2);

  // add whatever parameters you deem necessary - good luck!
}

fib(4); // 3
fib(10); // 55
fib(28); // 317811
fib(35); // 9227465
