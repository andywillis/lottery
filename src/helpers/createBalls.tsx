import Ball from '../components/Ball';

import { IBall } from '../types';

function createBall(ball: IBall) {
  const { number, type } = ball;
  return <Ball number={number} type={type} />;
}

export default function createBalls(balls: IBall[]) {
  return balls.map(createBall);
}
