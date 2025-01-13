function solve(a, b) {
  return b.map((word) => {
    return a.filter((wr) => wr === word).length;
  });
}
