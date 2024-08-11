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
