export function mySqrt(x: number): number {
  if (x === 0) return 0;

  let end = x;
  let start = 0;

  while (start <= end) {
    let middle = Math.floor((end + start) / 2);

    if (middle * middle === x) return middle;
    if (middle * middle > x) end = middle - 1;
    if (middle * middle < x) start = middle + 1;
  }

  return end;
}
