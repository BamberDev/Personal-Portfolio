import styles from "./LandingPage.module.scss";
import videoSource from "../../../../assets/background-video.mp4";
import clsx from "clsx";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import PropTypes from "prop-types";

const LandingPage = ({ animationStarted }) => {
  const topHeadingRef = useRef(null);
  const bottomHeadingRef = useRef(null);
  const h2Ref = useRef(null);
  const topParagraphRef = useRef(null);
  const bottomParagraphRef = useRef(null);

  const landingPageContainer = document.querySelector(
    `.${styles.landingPageContainer}`
  );

  useEffect(() => {
    if (animationStarted) {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(landingPageContainer, {
        opacity: 0,
        duration: 0.5,
      })
        .from(bottomParagraphRef.current, {
          y: 100,
          opacity: 0,
          stagger: 0.5,
        })
        .from(
          topParagraphRef.current,
          {
            y: 100,
            opacity: 0,
            stagger: 0.5,
          },
          "-=0.4"
        )
        .from(
          h2Ref.current,
          {
            y: 100,
            opacity: 0,
            stagger: 0.5,
          },
          "-=0.4"
        )
        .from(
          bottomHeadingRef.current,
          {
            y: 100,
            opacity: 0,
            stagger: 0.5,
          },
          "-=0.4"
        )
        .from(
          topHeadingRef.current,
          {
            y: 100,
            opacity: 0,
            stagger: 0.5,
          },
          "-=0.4"
        );

      return () => {
        tl.kill();
      };
    }
  }, [animationStarted, landingPageContainer]);

  const scrollToAbout = (e) => {
    e.preventDefault();
    const aboutSection = document.getElementById("about");
    aboutSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className={styles.videoContainer}>
      <video
        autoPlay
        loop
        muted
        alt="Background video showing grey triangles"
        className={styles.video}
      >
        <source src={videoSource} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className={clsx("container", styles.landingPageContainer)}>
        <h1>
          <span className={styles.topHeading} ref={topHeadingRef}>
            HI THERE,
          </span>
          <span className={styles.bottomHeading} ref={bottomHeadingRef}>
            I&apos;M KEVIN.
          </span>
        </h1>
        <h2 ref={h2Ref}>
          <span>FRONTEND DEVELOPER</span>
        </h2>
        <p>
          <span ref={topParagraphRef}>
            I build pixel-perfect, user-friendly
          </span>
          <span ref={bottomParagraphRef}>
            and immersive digital experiences.
          </span>
        </p>
        <a href="#about" onClick={scrollToAbout}>
          <MdKeyboardArrowDown />
        </a>
      </div>
    </section>
  );
};

LandingPage.propTypes = {
  animationStarted: PropTypes.bool.isRequired,
};

export default LandingPage;
