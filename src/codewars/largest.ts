function largest(n, array) {
  const sorted = array.sort((a, b) => (a -= b));
  return sorted.slice(sorted.length - n);
}
