import { Link } from "react-router-dom";
import styles from "./AboutMe.module.scss";
import TechStack from "./components/TechStack/TechStack";

const AboutMe = () => {
  return (
    <section className="container">
      <div id="about" className={styles.aboutMeContainer}>
        <h1>ABOUT ME</h1>
        <p>
          As a frontend developer, I love crafting engaging digital journeys.
          From the basic HTML to the complex animations and responsive designs,
          I&apos;ve been captivated by the power of code to bring concepts into
          existence on the screen.
        </p>
        <p>
          When I&apos;m not coding, I&apos;m exploring the latest design trends
          or experimenting with new technologies. I believe in the importance of
          continuous learning and I&apos;m always eager to exchange knowledge
          and ideas.
        </p>
        <p>Let&apos;s make something!</p>
        <Link to="/contact">CONTACT</Link>
        <TechStack />
      </div>
    </section>
  );
};
export default AboutMe;
