function linearSearch(numbers: number[], target: number) {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === target) return i;
  }

  return -1;
}

linearSearch([10, 15, 20, 25, 30], 15); // 1
linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4); // 5
linearSearch([100], 100); // 0
linearSearch([1, 2, 3, 4, 5], 6); // -1
linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 10); // -1
linearSearch([100], 200); // -1

const binearSearch = (numbers: number[], target: number) => {
  let start = 0;
  let end = numbers.length - 1;

  while (start <= end) {
    let index = Math.floor((start + end) / 2);
    let middle = numbers[index];

    if (middle === target) return index;
    if (middle > target) end = index - 1;
    if (middle < target) start = index + 1;
  }

  return -1;
};

binearSearch([10, 15, 20, 25, 30], 15); // 1
binearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4); // 5
binearSearch([100], 100); // 0
binearSearch([1, 2, 3, 4, 5], 6); // -1
binearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 10); // -1
binearSearch([100], 200); // -1

const naiveSearch = (str: string, search: string) => {
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    let temp = "";
    for (let j = 0; j < search.length; j++) {
      if (str[j] !== str[i + j]) break;
      temp += search[j];
    }
    if (temp === search) sum++;
    temp = "";
  }

  return sum;
};

console.log(naiveSearch("omgblablaomg", "omg"));
