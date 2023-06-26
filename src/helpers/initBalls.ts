import { IBall } from '../types';

export default function initBalls(numbers: number[]): IBall[] {
  return numbers.map(number => {
    return { number: number + 1 };
  });
}
