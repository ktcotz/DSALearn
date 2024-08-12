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

function reverse(str: string) {
  if (str.length === 0) return "";

  return str[str.length - 1] + reverse(str.slice(0, str.length - 1));
}

reverse("awesome"); // 'emosewa'
reverse("rithmschool"); // 'loohcsmhtir'

function isPalindrome(str: string) {
  if (str.length === 0) return false;
  if (str.length === 1) return true;

  const first = str[0];
  const last = str[str.length - 1];

  return first === last ? isPalindrome(str.slice(1, -1)) : false;
}

isPalindrome("awesome"); // false
isPalindrome("foobar"); // false
isPalindrome("tacocat"); // true
isPalindrome("amanaplanacanalpanama"); // true
isPalindrome("amanaplanacanalpandemonium"); // false

function someRecursive(numbers: number[], callback: (num: number) => boolean) {
  const valids = [];

  const helper = (
    helperNumbers: number[],
    callback: (num: number) => boolean
  ) => {
    if (helperNumbers.length === 0) return;

    const first = helperNumbers[0];

    valids.push(callback(first));

    return helper(helperNumbers.slice(1), callback);
  };

  helper(numbers, callback);

  return valids.includes(true);
}

const isOdd = (val) => val % 2 !== 0;

someRecursive([1, 2, 3, 4], isOdd); // true
someRecursive([4, 6, 8, 9], isOdd); // true
someRecursive([4, 6, 8], isOdd); // false
someRecursive([4, 6, 8], (val) => val > 10); // false

function flatten(arr: any[]) {
  const flattedArr = [];

  const helper = (arr: any[]) => {
    if (arr.length === 0) return;

    arr.forEach((val) => {
      if (Array.isArray(val)) {
        helper(val);
      } else {
        flattedArr.push(val);
      }
    });
  };

  helper(arr);

  return flattedArr;
}

flatten([1, 2, 3, [4, 5]]); // [1, 2, 3, 4, 5]
flatten([1, [2, [3, 4], [[5]]]]); // [1, 2, 3, 4, 5]
flatten([[1], [2], [3]]); // [1,2,3]
flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]); // [1,2,3]

function capitalizeFirst(words: string[]) {
  const capitalizedWords = [];

  const helper = (helperWords: string[]) => {
    if (helperWords.length === 0) return;

    capitalizedWords.push(
      `${helperWords[0][0].toUpperCase()}${helperWords[0]
        .slice(1)
        .toLowerCase()}`
    );

    return helper(helperWords.slice(1));
  };

  helper(words);

  return capitalizedWords;
}

capitalizeFirst(["car", "taco", "banana"]); // ['Car','Taco','Banana']

function nestedEvenSum(obj: any) {
  let sum = 0;

  const helper = (helperObj: any) => {
    for (let key in helperObj) {
      if (typeof helperObj[key] === "number" && helperObj[key] % 2 === 0) {
        sum += helperObj[key];
      } else if (typeof helperObj[key] === "object") {
        helper(helperObj[key]);
      }
    }
  };

  helper(obj);

  return sum;
}

var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup",
    },
  },
};

var obj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: "ball", ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: "car" },
};

nestedEvenSum(obj1); // 6
nestedEvenSum(obj2); // 10

function capitalizeWords(words: string[]) {
  const capitalizedWords = [];

  const helper = (helperWords: string[]) => {
    if (helperWords.length === 0) return;

    capitalizedWords.push(helperWords[0].toUpperCase());

    return helper(helperWords.slice(1));
  };

  helper(words);

  return capitalizedWords;
}

let words = ["i", "am", "learning", "recursion"];
capitalizeWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']

const stringifyNumbers = (obj: any) => {
  let returnedObj = {};

  const helper = (helperObj) => {
    const newObj = {};

    for (const key in helperObj) {
      if (typeof helperObj[key] === "number") {
        newObj[key] = helperObj[key].toString();
      } else if (
        typeof helperObj[key] === "object" &&
        !Array.isArray(helperObj[key])
      ) {
        newObj[key] = helper(helperObj[key]);
      } else {
        newObj[key] = helperObj[key];
      }
    }

    return newObj;
  };

  returnedObj = helper(obj);

  return returnedObj;
};

let obj = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66,
    },
  },
};

stringifyNumbers(obj);

const collectStrings = (obj: any) => {
  const returnedStrings = [];

  const helper = (helperObj) => {
    for (const key in helperObj) {
      if (typeof helperObj[key] === "string") {
        returnedStrings.push(helperObj[key]);
      } else if (typeof helperObj[key] === "object") {
        helper(helperObj[key]);
      }
    }
  };

  helper(obj);

  return returnedStrings;
};

const objB = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz",
          },
        },
      },
    },
  },
};

collectStrings(objB); // ["foo", "bar", "baz"])
