import styles from "./LandingPage.module.scss";
import videoSource from "../../../../assets/backgroundVideo.webm";
import clsx from "clsx";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import PropTypes from "prop-types";
import LocomotiveScroll from "locomotive-scroll";

const LandingPage = ({ animationStarted }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const topHeadingRef = useRef(null);
  const bottomHeadingRef = useRef(null);
  const h2Ref = useRef(null);
  const topParagraphRef = useRef(null);
  const bottomParagraphRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (animationStarted) {
      const scroll = new LocomotiveScroll({
        el: containerRef.current,
        smooth: true,
      });

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(containerRef.current, {
        opacity: 0,
        duration: 0.5,
      }).from(
        [
          bottomParagraphRef.current,
          topParagraphRef.current,
          h2Ref.current,
          bottomHeadingRef.current,
          topHeadingRef.current,
        ],
        { y: 100, opacity: 0, stagger: 0.15 }
      );

      return () => {
        tl.kill();
        scroll.destroy();
      };
    }
  }, [animationStarted]);

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
        playsInline
        alt="Background video showing grey triangles"
        title="Background video showing grey triangles"
        className={styles.video}
      >
        <source src={videoSource} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div
        className={clsx("container", styles.landingPageContainer)}
        ref={containerRef}
      >
        <h1 data-scroll data-scroll-speed="0.2">
          <span className={styles.topHeading} ref={topHeadingRef}>
            HI THERE,
          </span>
          <span className={styles.bottomHeading} ref={bottomHeadingRef}>
            I&apos;M KEVIN.
          </span>
        </h1>
        <h2 ref={h2Ref} data-scroll data-scroll-speed="0.3">
          <span>FRONTEND DEVELOPER</span>
        </h2>
        <p data-scroll data-scroll-speed="0.3">
          <span ref={topParagraphRef}>
            I build pixel-perfect, user-friendly
          </span>
          <span ref={bottomParagraphRef}>
            and immersive digital experiences.
          </span>
        </p>
        <a
          href="#about"
          onClick={scrollToAbout}
          aria-label="Scroll down to about me section"
        >
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
