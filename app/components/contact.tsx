import { FaInstagram, FaYoutube, FaLinkedinIn } from 'react-icons/fa';
import Image from "next/image";
import styles from './contact.module.css';
import TidyCalModal from '@/app/ui/tidyCalModal';

export default function Contact() {
  return (
    <section id="contact" className={styles.container}>
      <h2 className={styles.title}>Travaillons ensemble !</h2>
      <div className={styles.content}>
        <Image
          src="/portrait_contact.jpeg"
          alt="Portrait de Lisa Faci"
          width={275}
          height={366}
          className={styles.portrait}
        />
        <div className={styles.informations}>
          <div className={styles.book_meeting}>
            <span>Parlons de votre projet 👇</span>
            <TidyCalModal />
          </div>
          <div>
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
          </div>
        </div>
      </div>
    </section>
  );
}