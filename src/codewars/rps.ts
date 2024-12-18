export function rps(p1: string, p2: string): string {
  const obj: Record<string, string[]> = {
    rock: ["scissors"],
    paper: ["rock"],
    scissors: ["paper"],
  };

  const isDraw = p1 === p2;

  if (isDraw) return "Draw!";

  return obj[p1].includes(p2) ? "Player 1 won!" : "Player 2 won!";
}
