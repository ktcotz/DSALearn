export const pigIt = (a: string): string => {
  const punctutation_marks = ["!", "?", ".", "", " "];

  const mapped = a
    .split(" ")
    .map((word) => {
      if (punctutation_marks.includes(word)) return word;

      const begin = word.slice(1);

      return `${begin}${word[0]}ay`;
    })
    .join(" ");

  return mapped;
};
