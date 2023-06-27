import classnames from 'classnames';

import { IBall } from '../../types';

import styles from './index.module.css';

export default function Ball({ number, type }: IBall) {

  const cn = classnames({
    [styles.ball]: true,
    [styles.selected]: type === 'selected',
    [styles.border]: type === 'selected',
    [styles.bonus]: type === 'bonus'
  });

  return (
    <button
      data-id={number}
      type="button"
      className={cn}
    >{number}
    </button>
  );

}
