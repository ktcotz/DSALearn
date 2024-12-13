export function camelCase(str: string): string {
  if (!str) return "";
  return str
    .split(" ")
    .map((word) => `${word[0].toUpperCase()}${word.slice(1).toLowerCase()}`)
    .join("");
}
