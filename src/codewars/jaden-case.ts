String.prototype.toJadenCase = function (this) {
  const capitalized = String(this)
    .split(" ")
    .map((word) => `${word[0].toUpperCase()}${word.slice(1).toLowerCase()}`)
    .join(" ");
  return capitalized;
};

interface String {
  // Declaration needed, don't remove it
  toJadenCase(): string;
}
