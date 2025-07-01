import Image from "next/image";
import styles from "./certification.module.css";
import SlideInOnScroll from "@/app/components/slideInOnScroll";

export default function Certifications() {
  return (
    <div className={styles.container}>
      <div className={styles.title_box}>
        <SlideInOnScroll>
          <h2 className={styles.title}>Certificats</h2>
        </SlideInOnScroll>
        <Image
          className={styles.line_draw}
          src="/line_draw/simple_line.svg"
          alt="ligne jaune dessiné à la main"
          width={470}
          height={90}
        />
      </div>
      <div className={styles.content}>
        <div className={styles.content__text_container}>
          <span>
            J’aime comprendre ce que je fais. Voici les formations et certifications que j’ai suivies pour aller plus loin dans ma pratique du développement.
          </span>
        </div>
        <div className={styles.content__badges}>
          <Image
            src="/developer_associate.png"
            alt="badge certfication developer associate AWS"
            width={140}
            height={140}
          />
          <Image
            src="/cloud_practitioner.png"
            alt="badge certfication cloud practitionar AWS"
            width={140}
            height={140}
          />
        </div>
      </div>
    </div>
  );
}