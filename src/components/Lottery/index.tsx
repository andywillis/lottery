import { useEffect, useState } from 'preact/hooks';

import { IBall } from '../../types';

import BallGrid from '../BallGrid';
import Header from '../Header';
import Chart from '../Chart';
import SelectedBalls from '../SelectedBalls';

import {
  initNumbers,
  initBalls,
  initSelectBalls,
} from '../../helpers';

import style from './style.module.css';

export default function App() {

  const [ tally, setTally ] = useState<number[]>([]);
  const [ balls, setBalls ] = useState<IBall[]>([]);
  const [ selectedBalls, setSelectedBalls ] = useState<IBall[]>([]);

  function initialise() {

    const numbers = initNumbers(59);
    const balls = initBalls(numbers);

    const {
      updatedBalls,
      selectedBalls,
      bonusBall
    } = initSelectBalls(balls);

    setBalls(updatedBalls);
    setSelectedBalls([ ...selectedBalls, bonusBall ]);
  }

  useEffect(() => initialise(), []);

  useEffect(() => {
    setTally([
      ...tally,
      ...selectedBalls.map(ball => ball.number)
    ]);
  }, [selectedBalls]);

  return (
    <main className={style.main}>
      <Header handleClick={initialise} />
      <BallGrid balls={balls} />
      <SelectedBalls selectedBalls={selectedBalls} />
      <Chart type="histogram" data={tally} />
    </main>
  );

}
