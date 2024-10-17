const bubbleSort = (numbers: number[]) => {
  let noSwaps = false;
  for (let i = 0; i < numbers.length; i++) {
    noSwaps = true;
    for (let j = 0; j < numbers.length - i - 1; j++) {
      if (numbers[j] > numbers[j + 1]) {
        [numbers[j], numbers[j + 1]] = [numbers[j + 1], numbers[j]];
        noSwaps = false;
      }
    }

    if (noSwaps) break;
  }

  return numbers;
};

bubbleSort([29, 10, 14, 37, 15]);

const selectionSort = (numbers: number[]) => {
  for (let i = 0; i < numbers.length; i++) {
    let min = i;

    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[j] < numbers[min]) {
        min = j;
      }
    }

    if (min !== i) {
      [numbers[i], numbers[min]] = [numbers[min], numbers[i]];
    }
  }

  return numbers;
};

selectionSort([29, 10, 14, 37, 15]);

const insertionSort = (numbers: number[]) => {
  for (let i = 1; i < numbers.length; i++) {
    let currentVal = numbers[i];

    for (var j = i - 1; j >= 0 && numbers[j] > currentVal; j--) {
      numbers[j + 1] = numbers[j];
    }

    numbers[j + 1] = currentVal;
  }

  return numbers;
};

insertionSort([29, 10, 14, 37, 15]);
