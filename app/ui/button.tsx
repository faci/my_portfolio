'use client';

import styles from './button.module.css';

type Props = {
  label: string;
  src: string;
}

export default function Button(props: Props) {
  return (
    <a
      className={styles.button}
      href={props.src}
    >
      {props.label}
    </a>
  );
}