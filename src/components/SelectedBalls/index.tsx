import { IBall } from '../../types';

import { createBalls } from '../../helpers';

import styles from './index.module.css';

interface Props {
  selectedBalls: IBall[];
}

export default function BallGrid({ selectedBalls }: Props) {
  return (
    <section className={styles.selected}>
      {createBalls(selectedBalls)}
    </section>
  );
}
