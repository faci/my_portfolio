import Image from "next/image";
import styles from "@/app/components/intro.module.css";
import SlideInOnScroll from "@/app/components/slideInOnScroll";

export default function Intro() {
  return (
    <section className={styles.container}>
      <div className={styles.title_box}>
        <SlideInOnScroll>
          <h2 className={styles.title}>Mais qui suis-je ?</h2>
        </SlideInOnScroll>
        <Image
          className={styles.line_draw}
          src="/line_draw/simple_line.svg"
          alt="ligne jaune dessiné à la main"
          width={470}
          height={90}
          style={{
            width: '100%',
            maxWidth: '470px',
            height: '90px',
          }}
        />
      </div>
      <div className={styles.content}>
        <div className={styles.content__description}>
          <div className={styles.content__description_container}>
            Développeuse web full stack freelance, je conçois des applications web <b>claires</b>, <b>utiles</b> et <b>évolutives</b>.
            <br/><br/>
            Depuis plus de 5 ans, j’aide des startups et PME à transformer leurs idées en produits digitaux solides, de la maquette jusqu’à la mise en ligne. <br/>
            Je m’investis dans chaque projet avec la rigueur d’une dev expérimentée, et la vision d’une partenaire produit.
            <br/><br/>
            Actuellement basée au Panama, je travaille en remote avec des équipes en France et à l’international.<br/>
          </div>
        </div>
        <div className={styles.content__avatar}>
          <SlideInOnScroll direction="right">
            <Image
              src="/portrait_intro.jpeg"
              alt="Portrait de Lisa Faci"
              width={351}
              height={351}
              style={{
                width: 'auto',
                maxWidth: '100%',
                height: 'auto',
              }}
            />
          </SlideInOnScroll>
        </div>
        <Image
          className={styles.z_line_left}
          src="/line_draw/z_line.svg"
          alt="double ligne jaune dessiné à la main"
          width={470}
          height={90}
          style={{
            width: '100%',
            maxWidth: '470px',
            height: '90px',
          }}
        />
      </div>
    </section>
  );
}