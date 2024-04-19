import PropTypes from "prop-types";
import styles from "./Modal.module.scss";
import { motion } from "framer-motion";
import gsap from "gsap";
import { useEffect, useRef } from "react";

const scaleAnimation = {
  initial: { scale: 0, x: "-50%", y: "-50%" },
  open: {
    scale: 1,
    x: "-50%",
    y: "10%",
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    scale: 0,
    x: "-50%",
    y: "10%",
    transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
  },
  openCursor: {
    scale: 1,
    x: "-50%",
    y: "500%",
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
  closedCursor: {
    scale: 0,
    x: "-50%",
    y: "500%",
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
};

const Modal = ({ modal, projects }) => {
  const { active, index } = modal;
  const container = useRef(null);
  const cursor = useRef(null);
  const cursorLabel = useRef(null);

  useEffect(() => {
    const MoveContainerX = gsap.quickTo(container.current, "left", {
      duration: 0.4,
      ease: "power3",
    });
    const MoveContainerY = gsap.quickTo(container.current, "top", {
      duration: 0.4,
      ease: "power3",
    });

    const MoveCursorX = gsap.quickTo(cursor.current, "left", {
      duration: 0.5,
      ease: "power3",
    });
    const MoveCursorY = gsap.quickTo(cursor.current, "top", {
      duration: 0.5,
      ease: "power3",
    });

    const MoveCursorLabelX = gsap.quickTo(cursorLabel.current, "left", {
      duration: 0.5,
      ease: "power3",
    });
    const MoveCursorLabelY = gsap.quickTo(cursorLabel.current, "top", {
      duration: 0.5,
      ease: "power3",
    });

    window.addEventListener("mousemove", (e) => {
      const { pageX, pageY } = e;
      MoveContainerX(pageX);
      MoveContainerY(pageY);
      MoveCursorX(pageX);
      MoveCursorY(pageY);
      MoveCursorLabelX(pageX);
      MoveCursorLabelY(pageY);
    });
  }, []);

  return (
    <>
      <motion.div
        ref={container}
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "open" : "closed"}
        className={styles.modalContainer}
      >
        <div style={{ top: index * -100 + "%" }} className={styles.modalSlider}>
          {projects.map((project, index) => {
            const { src, color } = project;
            return (
              <div
                key={index}
                style={{ backgroundColor: color }}
                className={styles.modal}
              >
                <img src={src} alt="Image of a project" />
              </div>
            );
          })}
        </div>
      </motion.div>
      <motion.div
        ref={cursor}
        className={styles.cursor}
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "openCursor" : "closedCursor"}
      ></motion.div>
      <motion.div
        ref={cursorLabel}
        className={styles.cursorLabel}
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "openCursor" : "closedCursor"}
      >
        VIEW
      </motion.div>
    </>
  );
};

export default Modal;

Modal.propTypes = {
  modal: PropTypes.shape({
    active: PropTypes.bool.isRequired,
    index: PropTypes.number.isRequired,
  }).isRequired,
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
    })
  ).isRequired,
};
