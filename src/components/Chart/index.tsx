import { useEffect, useRef } from 'react';

import charts from '../../charts';
import chartConfig from '../../config/charts';

import style from './index.module.css';

export default function Chart({ type, data }) {

  const ref = useRef(null);

  useEffect(() => {
    if (data && data.length) {
      new charts[type](ref.current, { data, ...chartConfig[type] });
    }
  }, [data]);

  return (
    <section ref={ref} className={style.chart} />
  );

}
