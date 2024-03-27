import clsx from "clsx";
import styles from "./AboutMe.module.scss";

const AboutMe = () => {
  return (
    <section className={clsx("container", styles.aboutMeContainer)}>
      <div id="about">
        <h1>About Me</h1>
        <p>
          Hi there! I&apos;m Kevin Cieślik, a frontend developer passionate
          about crafting immersive digital experiences. From the first lines of
          HTML I wrote to the intricate animations and responsive designs I now
          create, I've been captivated by the power of code to bring concepts
          into existence on the screen.
        </p>
        <p>
          When I'm not coding, I'm exploring the latest design trends or
          experimenting with new technologies. I believe in the importance of
          continuous learning and I'm always eager to exchange knowledge and
          ideas with fellow developers.
        </p>
        <p>Let's create something extraordinary together!</p>
        <h2>Tools i use</h2>
      </div>
    </section>
  );
};
export default AboutMe;
