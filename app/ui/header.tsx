'use client';

import { FaGithub, FaLinkedin } from 'react-icons/fa';
import styles from './header.module.css'
import Image from "next/image";
import { useRouter } from 'next/navigation'

export default function Header() {
  const router = useRouter();

  return (
    <div className={styles.header__container}>
      <div
        className={styles.title_container}
        onClick={() => router.push('/')}
      >
        <span>Lisa Faci</span>
        <Image
          className={styles.line_draw}
          src="images/line_draw/small_line.svg"
          alt="ligne jaune dessiné à la main"
          width={180}
          height={50}
        />
      </div>
      
      <div className={styles.header__icons}>
        <a href="https://github.com/faci" target="_blank" rel="noopener noreferrer">
          <FaGithub size={30} />
        </a>

        <a href="https://www.linkedin.com/in/lisa-faci/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={30} />
        </a>
      </div>
    </div>
  )
}