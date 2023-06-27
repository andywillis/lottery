import { useEffect, useRef } from 'preact/hooks';

import charts from '../../charts';
import chartConfig from '../../config/charts';

import style from './index.module.css';

interface Props {
  type: 'histogram';
  data: number[];
}

export default function Chart({ type, data }: Props) {

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
