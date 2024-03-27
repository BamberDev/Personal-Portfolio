import styles from "./LandingPage.module.scss";
import videoSource from "../../../../assets/background-video.mp4";
import clsx from "clsx";
import { MdKeyboardArrowDown } from "react-icons/md";
const LandingPage = () => {
  return (
    <section className={styles.videoContainer}>
      <video autoPlay loop muted className={styles.video}>
        <source src={videoSource} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className={clsx("container", styles.landingPageContainer)}>
        <h1>HI, I&apos;M KEVIN.</h1>
        <h2>FRONTEND DEVELOPER</h2>
        <p>
          I build pixel-perfect, user-friendly and immersive digital
          experiences.
        </p>

        <MdKeyboardArrowDown />
      </div>
    </section>
  );
};

export default LandingPage;
