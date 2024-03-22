import styles from "./page.module.css";
import HomeSection from "../components/HomeSection/HomeSection";
import ContactMe from "../components/ContactMeSection/ContactMe";
import Education from "../components/EducationSection/Education";
import Skills from "../components/SkillsSection/Skills";
import Experience from "../components/ExperienceSection/Experience";

export default function Home() {
  return (
    <>
      <section className={styles.section_content} id="about"><HomeSection /></section>
      <section className={styles.section_content} id="skills"><Skills /></section>
      <section className={styles.section_content} id="experience"><Experience /></section>
      <section className={styles.section_content} id="education"><Education /></section>
      <section className={styles.section_content} id="contact"><ContactMe /></section>
    </>
  );
}