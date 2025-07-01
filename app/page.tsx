import styles from "./page.module.css";
import Hero from "./components/hero";
import Intro from "./components/intro";
import Certifications from "./components/certifications";
import Skills from "./components/skills";
import Experiences from "./components/experiences";
import Contact from "./components/contact";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Hero />
        <Intro />
        <Certifications />
        <Skills />
        <Experiences />
        <Contact />
      </main>
    </div>
  );
}
