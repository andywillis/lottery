import { IBall } from '../../types';

import { createBalls } from '../../helpers';

import styles from './index.module.css';

interface Props {
  balls: IBall[];
}

export default function BallGrid({ balls }: Props) {
  return (
    <section className={styles.balls}>
      <section className={styles.grid}>
        {createBalls(balls)}
      </section>
    </section>
  );
}
