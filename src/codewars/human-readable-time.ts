export function humanReadable(seconds: number): string {
  const HOUR_IN_SECONDS = 3600;
  const MINUTE_IN_SECONDS = 60;

  const hours = String(Math.floor(seconds / HOUR_IN_SECONDS)).padStart(2, "0");
  const minutes = String(
    Math.floor((seconds % HOUR_IN_SECONDS) / MINUTE_IN_SECONDS)
  ).padStart(2, "0");
  const secondsLeft = String(Math.floor(seconds % MINUTE_IN_SECONDS)).padStart(
    2,
    "0"
  );

  return `${hours}:${minutes}:${secondsLeft}`;
}
