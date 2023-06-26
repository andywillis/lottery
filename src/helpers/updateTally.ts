import { IBall } from '../types';

interface Props {
  tally: { [key: string]: number };
  selectedBalls: IBall[]
}

export default function updateTally({ tally, selectedBalls }: Props) {
  const selected = selectedBalls.map(ball => ball.number);
  selected.forEach(number => {
    tally[number] ??= 0;
    ++tally[number];
  });
  return tally;
}
