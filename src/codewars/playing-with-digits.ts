export class G964 {
  public static digPow = (n: number, p: number) => {
    const digits = n
      .toString()
      .split("")
      .map((el, i) => Number(el) ** (p + i));

    const sum = digits.reduce((acc, next) => (acc += next), 0);

    const k = sum / n;

    if (Number.isInteger(k)) return k;

    return -1;
  };
}

G964.digPow(89, 1);
G964.digPow(92, 1);
G964.digPow(46288, 3);
