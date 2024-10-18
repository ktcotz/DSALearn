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

const mergeSort = (numbers: number[]) => {
  const merge = (firstArray: number[], secondArray: number[]) => {
    const sortedArray: number[] = [];
    let left = 0;
    let right = 0;

    while (left < firstArray.length && right < secondArray.length) {
      if (firstArray[left] > secondArray[right]) {
        sortedArray.push(secondArray[right]);
        right++;
      } else {
        sortedArray.push(firstArray[left]);
        left++;
      }
    }

    while (left < firstArray.length) {
      sortedArray.push(firstArray[left]);
      left++;
    }

    while (right < secondArray.length) {
      sortedArray.push(secondArray[right]);
      right++;
    }

    return sortedArray;
  };

  if (numbers.length <= 1) return numbers;

  let mid = Math.floor(numbers.length / 2);
  let left = mergeSort(numbers.slice(0, mid));
  let right = mergeSort(numbers.slice(mid));

  return merge(left, right);
};

console.log(mergeSort([29, 10, 14, 37, 15]));
