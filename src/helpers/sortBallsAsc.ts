import { IBall } from '../types';

export default function sortBallsAsc(a: IBall, b: IBall): number {
  if (b.number < a.number) return 1;
  if (a.number > b.number) return -1;
  return 0;
}
