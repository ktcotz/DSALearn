const isPrime = (num: number) => {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

const generatePrimes = (start: number, end: number) => {
  const primes: number[] = [];

  for (let i = start; i <= end; i++) {
    if (isPrime(i)) primes.push(i);
  }

  return primes;
};

export const gap = (g: number, m: number, n: number): number[] | null => {
  const getPrimesBetween = generatePrimes(m, n);
  const result: number[] = [];

  for (let i = 0; i < getPrimesBetween.length; i++) {
    if (getPrimesBetween[i + 1] - getPrimesBetween[i] === g) {
      result.push(getPrimesBetween[i], getPrimesBetween[i + 1]);
      break;
    }
  }

  return result.length > 0 ? result : null;
};
