export default function rnd(n: number): number {
  return Math.floor(Math.random() * (n - 1 + 1) + 1);
}
