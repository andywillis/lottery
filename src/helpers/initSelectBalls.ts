import { IBall, TSelected } from '../types';

import rnd from './rnd';
import sortBallsAsc from './sortBallsAsc';

interface Props {
  updatedBalls: IBall[];
  selectedBalls: IBall[];
  bonusBall: IBall;
}

export default function initSelectBalls(balls: IBall[]): Props {

  const selectedBalls: IBall[] = [];
  let index = 1;

  while (index <= 7) {

    // Get a random number
    const number: number = rnd(59);

    // Try to find that ball in the selectedBalls array
    const selectedBall = selectedBalls.find((obj: IBall) => {
      return obj.number === number;
    });

    // If it's not there...
    if (!selectedBall) {

      // Set the ball type based on the index
      const type: TSelected = index === 7 ? 'bonus' : 'selected';

      // Find the ball in the balls array
      const foundBall = balls.find((obj: IBall) => {
        return obj.number === number;
      });

      // Fix its type
      if (foundBall) foundBall.type = type;

      // Add the new ball to the selectedBalls array
      selectedBalls.push({ number, type });

      // Next iteration
      ++index;

    }

  }

  const bonusBall: IBall = selectedBalls.splice(-1, 1)[0];

  selectedBalls.sort(sortBallsAsc);

  return {
    updatedBalls: balls,
    selectedBalls,
    bonusBall
  };

}
