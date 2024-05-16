/* eslint-disable import/no-anonymous-default-export */
import styles from './Burger.module.scss';

export default function Burger({ openMenu }: { openMenu: VoidFunction }) {
  return (
    <div
      onClick={() => {
        openMenu();
      }}
      className={styles.button}
    >
      <div className={styles.background}></div>
      <svg
        className={styles.svg}
        width="56"
        height="7"
        viewBox="0 0 56 7"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line x1="56" y1="0.5" x2="4.37114e-08" y2="0.500005" stroke="white" />
        <line x1="56" y1="6.5" x2="28" y2="6.5" stroke="white" />
      </svg>
      <p className={styles.para}>Menu</p>
    </div>
  );
}
