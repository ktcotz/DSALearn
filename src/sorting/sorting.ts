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

  console.log(numbers);
};

bubbleSort([29, 10, 14, 37, 15]);
