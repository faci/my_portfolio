import Image from "next/image";
import styles from "./hero.module.css";

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <Image
        src="/portrait.jpeg"
        alt="Portrait de Lisa Faci"
        style={{
          width: '100%',
          maxWidth: '300px',
          height: 'auto',
        }}
        width={384}
        height={384}
        priority
      />
      <h1 className={styles.title}>PORTFOLIO</h1>
    </section>
  );
}