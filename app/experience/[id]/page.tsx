"use client"

import { use } from "react";
import Image from "next/image";
import { useRouter } from 'next/navigation'
import { getExperience, getOtherExperiences } from "@/app/data/experiences"
import styles from './page.module.css'
import SlideInOnScroll from "@/app/ui/slideInOnScroll";
import ExperienceCard from '@/app/ui/experience_card'
import TidyCalModal from '@/app/ui/tidyCalModal';

export default function ExperiencePage({
  params,
}: {
  params: Promise<{ id: number }>
}) {
  const { id } = use(params);
  const experience = getExperience(id);
  const otherExperiences = getOtherExperiences(id);
  const router = useRouter();

  if (!experience) {
    return (
      <div>
        <h1>Expérience</h1>
        <span>Navré je n&apos;y suis pas encore !</span>
      </div>
    );
  }

  const redirectToDirection = (slug: number) => {
    router.replace(`/experience/${slug}`)
  }
 
  return (
    <div className={styles.container}>
      <div className={styles.title_box}>
        <h1 className={styles.title}>Expérience</h1>
        <Image
          className={styles.line_draw}
          src="images/line_draw/simple_line.svg"
          alt="ligne jaune dessiné à la main"
          width={470}
          height={90}
        />
      </div>
      <div className={styles.content}>
        <div className={styles.content_data}>
          <div className={`${styles.content_data_images} ${experience.isMobile && styles.content_data_images_mobile}`}>
            <div className={`${styles.screen_shot_card} ${experience?.isMobile ? styles.bottom_left : styles.top_left} ${experience?.isMobile && styles.screen_shot_card_mobile}`}>
              <div className={styles.screen_shot_image}>
                <Image
                  className={styles.screen_shot}
                  src={experience?.screenShot}
                  alt="capture écran du projet"
                  fill
                />
              </div>
            </div>
            <div className={`${styles.screen_shot_card} ${experience?.isMobile ? styles.center_center_mobile : styles.center_center} ${experience?.isMobile && styles.screen_shot_card_mobile}`}>
              <div className={styles.screen_shot_image}>
                <Image
                  className={styles.screen_shot}
                  src={experience?.screenShot1}
                  alt="capture écran du projet"
                  fill
                />
              </div>
            </div>
            <div className={`${styles.screen_shot_card} ${styles.bottom_right} ${experience?.isMobile && styles.screen_shot_card_mobile}`}>
              <div className={styles.screen_shot_image}>
                <Image
                  className={styles.screen_shot}
                  src={experience?.screenShot2}
                  alt="capture écran du projet"
                  fill
                />
              </div>
            </div>
          </div>
          <div className={styles.subtitle_box}>
            <SlideInOnScroll>
              <h2 className={styles.title}>Description</h2>
            </SlideInOnScroll>
            <Image
              className={styles.line_draw_subtitle}
              src="images/line_draw/simple_line.svg"
              alt="ligne jaune dessiné à la main"
              width={470}
              height={90}
            />
          </div>
          <div
            dangerouslySetInnerHTML={{__html: experience?.description}}
            className={styles.vhtml}
          ></div>
          <div className={styles.subtitle_box}>
            <SlideInOnScroll>
              <h2 className={styles.title}>Ma mission</h2>
            </SlideInOnScroll>
            <Image
              className={styles.line_draw_subtitle}
              src="images/line_draw/simple_line.svg"
              alt="ligne jaune dessiné à la main"
              width={470}
              height={90}
            />
          </div>
          <div
            dangerouslySetInnerHTML={{__html: experience?.mission}}
            className={styles.vhtml}
          ></div>
          <div className={styles.subtitle_box}>
            <SlideInOnScroll>
              <h2 className={styles.title}>Rex (retour d&apos;experience)</h2>
            </SlideInOnScroll>
            <Image
              className={styles.line_draw_subtitle}
              src="images/line_draw/simple_line.svg"
              alt="ligne jaune dessiné à la main"
              width={470}
              height={90}
            />
          </div>
          <span>{experience?.rex}</span>
        </div>
        <div className={styles.informations}>
          <div className={`${styles.title_box} ${styles.margin_bottom_15}`}>
          <SlideInOnScroll>
            <h2 className={styles.title}>Informations</h2>
          </SlideInOnScroll>
            <Image
              className={styles.line_draw_information}
              src="images/line_draw/simple_line.svg"
              alt="ligne jaune dessiné à la main"
              width={470}
              height={90}
            />
          </div>
          <div className={styles.information_content}>
            <span className={styles.label}>Nom :</span><span>{experience?.title}</span>
          </div>
          <div className={styles.information_content}>
            <span className={styles.label}>Type de contrat :</span><span>{experience?.type}</span>
          </div>
          <div className={styles.information_content}>
            <span className={styles.label}>Durée :</span><span>{experience?.duration}</span>
          </div>
          <div className={styles.information_content}>
            <span className={styles.label}>Site :</span><span>{experience?.website}</span>
          </div>
          <div className={styles.information_content}>
            <span className={styles.label}>Découvrez mes autres projets :</span>
          </div>
          <div className={styles.experience_list_wrapper}>
            <ul className={styles.experience_list}>
              {
                otherExperiences.map(experience => {
                  return (
                    <li key={experience.title} onClick={() => redirectToDirection(experience.id)}>
                      <ExperienceCard experience={experience} isFromExperience />
                    </li>
                  )
                })
              }
            </ul>
          </div>
          <div className={styles.book_meeting}>
            <span>Parlons de votre projet 👇</span>
            <TidyCalModal />
          </div>
        </div>
      </div>
    </div>
  )
}