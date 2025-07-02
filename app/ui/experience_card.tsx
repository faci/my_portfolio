import Image from 'next/image'
import {Experience} from '@/app/lib/types/experience'
import styles from './experience_card.module.css'
import smallLine from "@/app/assets/images/line_draw/small_line.svg";

type Props = {
  experience: Experience;
  isFromExperience: boolean;
}

export default function ExperienceCard({ experience, isFromExperience }: Props) {
  return (
    <div className={`${styles.experience_card__container} ${styles.card_flap_animate} ${isFromExperience && styles.experience__container}`}>
      <div className={styles.cover_container}>
        <Image
          src={experience.cover}
          alt="Cover de la carte : logo de l'entreprise"
          width={300}
          height={351}
          style={{
            width: 'auto',
            maxWidth: '100%',
            height: '100%',
          }}
        />
        <div className={styles.discover_text}>
          <h3 className={`${styles.discover_text__title} ${isFromExperience && styles.experience_h3}`}>Découvrir</h3>
        </div>
      </div>
      <h3 className={`${styles.title} ${isFromExperience && styles.experience_h3}`}>{experience.title}</h3>
      <span className={styles.subtitle}>{experience.subtitle}</span>
      <Image
        className={`${styles.top_left_mark} ${styles.mark}`}
        src={smallLine}
        alt="ligne jaune pour encardrer les cartes"
        width={150}
        height={80}
      />
      {
        experience.id % 2 == 0 &&
        (
          <Image
            className={`${styles.bottom_right_mark} ${styles.mark}`}
            src={smallLine}
            alt="ligne jaune pour encardrer les cartes"
            width={150}
            height={80}
          />
        )
      }
      {
        experience.id % 2 != 0 &&
        (
          <Image
            className={`${styles.top_right_mark} ${styles.mark}`}
            src={smallLine}
            alt="ligne jaune pour encardrer les cartes"
            width={150}
            height={80}
          />
        )
      }
    </div>
  );
}