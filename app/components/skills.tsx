import {hardSkills, SoftSkills} from '@/app/data/skills';
import Image from "next/image";
import styles from './skills.module.css';
import SlideInOnScroll from "@/app/ui/slideInOnScroll";
import simpleLine from "@/app/assets/images/line_draw/simple_line.svg";
import circleLine from "@/app/assets/images/line_draw/circle_line.svg";

export default function Skills() {
  return (
    <section id="skills" className={styles.container}>
      <div className={styles.title_box}>
        <SlideInOnScroll>
          <h2 className={styles.title}>Et les skills</h2>
        </SlideInOnScroll>
        <Image
          className={styles.line_draw}
          src={simpleLine}
          alt="ligne jaune dessiné à la main"
          width={470}
          height={90}
        />
      </div>
      <div className={styles.subtitle}>
        <span>
          Chaque mission a renforcé mon expertise technique et ma vision produit.

          D’abord entrepreneure sur une app mobile, puis 3 ans en CDI sur des projets complexes, et récemment en freelance : ces expériences m’ont appris à penser globalement, à coder proprement, et à collaborer efficacement.
        </span>
      </div>
      <div className={styles.content}>
        <div className={styles.content__element}>
          <div className={styles.content__element_title_box}>
            <h3>Hard</h3>
            <Image
              className={styles.circle_draw}
              src={circleLine}
              alt="cercle jaune dessiné à la main"
              width={200}
              height={250}
            />
          </div>
          <div className={styles.content__list}>
            <ul className={styles.hard_skills_list}>
              {
                hardSkills.map(skill => {
                  return (
                    <li key={skill.label}>
                      <div className={styles.content__list__element}>
                        <span className={styles.icon}>{skill.icon}</span>
                        <div className={styles.tooltipWrapper}>
                          <span>{skill.label}</span>
                          <div className={styles.mobile_content}>
                            <span>{skill.description}</span>
                            <span>{skill.duration}</span>
                          </div>

                          <div className={`${styles.tooltip} ${styles.tooltip_hard}`}>
                            <span className={styles.tooltip__text}>{skill.description}</span>
                            <span>{skill.duration}</span>
                          </div>
                        </div>
                      </div>
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </div>
        <div className={styles.content__element}>
          <div className={styles.content__element_title_box}>
            <h3>Soft</h3>
            <Image
              className={styles.circle_draw}
              src={circleLine}
              alt="cercle jaune dessiné à la main"
              width={200}
              height={250}
            />
          </div>
          <div className={styles.content__list}>
            <ul>
              {
                SoftSkills.map(skill => {
                  return (
                    <li key={skill.label}>
                      <div className={styles.content__list__element}>
                        <span className={styles.icon}>{skill.icon}</span>
                        <div className={styles.tooltipWrapper}>
                          <span>{skill.label}</span>
                          <div className={styles.tooltip}>
                            <span className={styles.tooltip__text}>{skill.description}</span>
                          </div>
                        </div>
                      </div>
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}