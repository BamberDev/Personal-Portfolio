import styles from "./LandingPage.module.scss";
import videoSource from "../../../../assets/background.mp4";
import clsx from "clsx";

const LandingPage = () => {
  return (
    <section className={styles.videoContainer}>
      <video autoPlay loop muted className={styles.video}>
        <source src={videoSource} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className={clsx("container", styles.landingPageContainer)}>
        <h1>Content</h1>
      </div>
    </section>
  );
};

export default LandingPage;
