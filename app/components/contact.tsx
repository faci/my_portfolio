import { FaInstagram, FaYoutube, FaLinkedinIn } from 'react-icons/fa';
import Image from "next/image";
import styles from './contact.module.css';

export default function Contact() {
  return (
    <div className={styles.container}>
      <span>Email : lisa.sarah.f@gmail.com</span>
      <div className={styles.social_links}>
        <a href="https://www.instagram.com/lisa_innosphere/" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={30} />
        </a>

        <a href="https://www.youtube.com/@lisafaci6154" target="_blank" rel="noopener noreferrer">
          <FaYoutube size={30} />
        </a>

        <a href="https://www.linkedin.com/in/lisa-faci/" target="_blank" rel="noopener noreferrer">
          <FaLinkedinIn size={30} />
        </a>
      </div>
      <h2 className={styles.title}>Travaillons ensemble !</h2>
      <div>
        <Image
          src="/portrait_contact.jpeg"
          alt="Portrait de Lisa Faci"
          width={275}
          height={366}
        />
      </div>
    </div>
  );
}