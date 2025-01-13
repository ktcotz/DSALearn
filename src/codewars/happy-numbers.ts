const getNumber = (num: number, pow: number) => {
  const numbers = num
    .toString()
    .split("")
    .map((num) => Number(num));
  const happy = numbers.reduce((acc, next) => (acc += next ** pow), 0);

  return happy;
};

export function isHappy(n, pow) {
  const temp = [];

  let current = n;

  while (!temp.includes(current)) {
    temp.push(current);

    current = getNumber(current, pow);
  }

  if (current === 1) return [1];

  const start = temp.indexOf(current);

  return [...temp.slice(start), current];
}
