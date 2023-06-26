import Ball from '../components/Ball';

import { IBall } from '../types';

function createBall(ball: IBall): JSX.Element {
  const { number, type } = ball;
  return <Ball number={number} type={type} />;
}

export default function createBalls(balls: IBall[]): JSX.Element[] {
  return balls.map(createBall);
}
