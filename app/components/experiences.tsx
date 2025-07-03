"use client"

import ExperienceCard from '@/app/ui/experience_card'
import {experiences} from '@/app/data/experiences'
import SlideInOnScroll from "@/app/ui/slideInOnScroll";
import styles from './experiences.module.css'

import Image from "next/image";
import { useRouter } from 'next/navigation'

export default function Experiences() {
  const router = useRouter()

  const redirectToDirection = (slug: number) => {
    router.push(`/experience/${slug}`)
  }

  return (
    <section id="experiences" className={styles.container}>
      <div className={styles.title_container}>
        <SlideInOnScroll>
          <h2 className={styles.title}>Mes Dernières <br /> expériences</h2>
        </SlideInOnScroll>
        <Image
          className={styles.line_draw}
          src="/images/line_draw/simple_line.svg"
          alt="ligne jaune dessiné à la main"
          width={470}
          height={90}
        />
      </div>
      <div className={styles.subtitle}>
        <span>
          Chaque projet a été un terrain d’apprentissage.
          D’abord entrepreneure sur une app mobile, puis 3 ans en CDI sur des projets complexes, et récemment en freelance : ces expériences m’ont appris à penser globalement, à coder proprement, et à collaborer efficacement.
        </span>
      </div>
      <ul className={styles.experience_list}>
        {
          experiences.map(experience => {
            return (
              <li key={experience.title} onClick={() => redirectToDirection(experience.id)}>
                <ExperienceCard experience={experience} isFromExperience={false}/>
              </li>
            )
          })
        }
      </ul>
    </section>
  );
}