import { Link } from "react-router-dom";
import styles from "./AboutMe.module.scss";
import TechStack from "./components/TechStack/TechStack";
import WantToLearn from "./components/WantToLearn/WantToLearn";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const AboutMe = () => {
  const card = useRef(null);
  const text = useRef(null);

  const { scrollYProgress: cardScrollYProgress } = useScroll({
    target: card,
    offset: ["start end", "end end"],
  });

  const { scrollYProgress: textScrollYProgress } = useScroll({
    target: text,
    offset: ["start end", "end end"],
  });

  const scale = useTransform(cardScrollYProgress, [0, 1], [1, 0.5]);
  const translateY = useTransform(textScrollYProgress, [0, 1], [250, 0]);
  const translateHeader = useTransform(textScrollYProgress, [0, 1], [75, 0]);
  const translateFirstP = useTransform(textScrollYProgress, [0, 1], [100, 0]);
  const translateSecondP = useTransform(textScrollYProgress, [0, 1], [200, 0]);
  const translateThirdP = useTransform(textScrollYProgress, [0, 1], [300, 0]);
  const opacity = useTransform(textScrollYProgress, [0, 1], [0, 1]);

  const scrollToTopWithDelay = () => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 1000);
  };

  return (
    <section className="container" id="about">
      <motion.div
        style={{ scale, y: translateY, opacity }}
        className={styles.aboutMeContainer}
        ref={text}
      >
        <div className={styles.textContainer}>
          <motion.h1 style={{ y: translateHeader }}>ABOUT ME</motion.h1>
          <motion.p style={{ y: translateFirstP }}>
            As a frontend developer, I love crafting engaging digital journeys.
            From the basic HTML to the complex animations and responsive
            designs, I&apos;ve been captivated by the power of code to bring
            concepts into existence on the screen.
          </motion.p>
          <motion.p style={{ y: translateSecondP }}>
            When I&apos;m not coding, I&apos;m exploring the latest design
            trends or experimenting with new technologies. I believe in the
            importance of continuous learning and I&apos;m always eager to
            exchange knowledge and ideas.
          </motion.p>
          <motion.p style={{ y: translateThirdP }}>
            Let&apos;s make something!
          </motion.p>
          <Link
            className={styles.contactButton}
            onClick={scrollToTopWithDelay}
            to="/contact"
          >
            <span>CONTACT</span>
            <i></i>
          </Link>
        </div>
      </motion.div>
      <div className={styles.cardContainer} ref={card}>
        <TechStack />
        <WantToLearn />
      </div>
    </section>
  );
};
export default AboutMe;
