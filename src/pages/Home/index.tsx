import { useEffect, useState } from 'preact/hooks';

import { IBall } from '../../types';

import {
  BallGrid,
  Clicker,
  Chart,
  SelectedBalls
} from '../../components';

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
      <Clicker handleClick={initialise} />
      <BallGrid balls={balls} />
      <SelectedBalls selectedBalls={selectedBalls} />
      <Chart type="histogram" data={tally} />
    </main>
  );

}
