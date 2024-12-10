export function toCamelCase(str: string): string {
  if (!str) return "";

  const betterStr = str.replace(/[-_]/g, " ");
  const words = betterStr.split(" ");

  const camelCase = words.map((word, idx) => {
    const uppered =
      word[0].toUpperCase() === word[0] ? word[0] : word[0].toLowerCase();

    const rest = word.slice(1).toLowerCase();

    return `${idx > 0 ? uppered.toUpperCase() : uppered}${rest}`;
  });

  return camelCase.join("");
}
