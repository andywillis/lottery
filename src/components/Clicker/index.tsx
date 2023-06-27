import styles from './index.module.css';

interface Props {
  handleClick(): void;
}

export default function Clicker({ handleClick }: Props) {
  return (
    <header className={styles.header}>
      <button
        type="button"
        className={styles.button}
        onClick={handleClick}
      >&gt; Click To Play &lt;
      </button>
    </header>
  );
}
