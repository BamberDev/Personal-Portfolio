import styles from "./Preloader.module.scss";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Preloader = () => {
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  useEffect(() => {
    const updateDimension = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };

    updateDimension();

    window.addEventListener("resize", updateDimension);

    return () => {
      window.removeEventListener("resize", updateDimension);
    };
  }, []);

  const slideUp = {
    initial: {
      y: 0,
    },
    exit: {
      y: "-100vh",
      transition: { duration: 1, ease: [0.65, 0, 0.35, 1] },
    },
  };

  const initialPath =
    dimension.width < 1024
      ? `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${
          dimension.width / 2
        } ${dimension.height + 100} 0 ${dimension.height}  L0 0`
      : `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${
          dimension.width / 2
        } ${dimension.height + 200} 0 ${dimension.height}  L0 0`;

  const targetPath =
    dimension.width < 1024
      ? `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${
          dimension.width / 2
        } ${dimension.height} 0 ${dimension.height}  L0 0`
      : `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${
          dimension.width / 2
        } ${dimension.height} 0 ${dimension.height}  L0 0`;

  const curve = {
    initial: {
      d: initialPath,
      transition: { duration: 1, ease: [0.65, 0, 0.35, 1] },
    },
    exit: {
      d: targetPath,
      transition: { duration: 1, ease: [0.65, 0, 0.35, 1], delay: 0.3 },
    },
  };

  return (
    <motion.div
      variants={slideUp}
      initial="initial"
      exit="exit"
      className={styles.preloader}
    >
      {dimension.width > 0 && (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            className={styles.logo}
          >
            <g id="C">
              <path d="M78.11,82.34c-.29,0-.56.06-.81.18-.25.12-.48.29-.71.49-.74.67-1.49,1.24-2.24,1.7-.75.46-1.55.83-2.39,1.13-.84.29-1.76.51-2.76.64-1,.14-2.11.2-3.35.2-2.06,0-3.99-.39-5.78-1.16-1.79-.77-3.35-1.89-4.67-3.35s-2.37-3.25-3.14-5.38c-.77-2.13-1.16-4.56-1.16-7.3s.39-5.03,1.16-7.15c.77-2.12,1.85-3.92,3.23-5.4,1.38-1.48,3.03-2.62,4.94-3.41,1.92-.8,4.02-1.19,6.31-1.19,1.95,0,3.56.2,4.83.61,1.27.4,2.31.84,3.14,1.31.83.47,1.51.91,2.05,1.31.54.4,1.06.61,1.58.61s.88-.1,1.16-.3c.28-.2.51-.44.69-.71l3.03-4.2c-1.93-1.91-4.24-3.44-6.94-4.59-2.7-1.15-5.86-1.73-9.47-1.73s-7.08.61-10.14,1.83c-1.14.46-2.21,1-3.23,1.6-1.72.99-3.28,2.16-4.66,3.53-.59.59-1.13,1.21-1.65,1.85-1.42,1.78-2.58,3.77-3.46,6-1.21,3.04-1.82,6.38-1.82,10.04s.54,6.94,1.63,9.99c1.09,3.05,2.65,5.67,4.69,7.87,2.04,2.2,4.5,3.91,7.38,5.15,2.88,1.23,6.13,1.85,9.74,1.85,4.04,0,7.49-.65,10.37-1.95,2.88-1.3,5.31-3.17,7.28-5.62l-3.56-3.87c-.36-.38-.79-.57-1.28-.57Z" />
            </g>
            <g id="K">
              <path d="M53.44,48.07l-12.25-16.52c-.56-.76-1.14-1.39-1.73-1.88s-1.26-.87-2-1.14c.54-.27,1.04-.62,1.51-1.04.47-.43.96-.95,1.48-1.58L56.83,5.69h-7.8c-.94,0-1.72.14-2.34.42-.62.28-1.21.78-1.77,1.5l-13.42,16.98c-.4.52-.89.89-1.45,1.13-.56.24-1.27.35-2.12.35h-2.12V5.65h-9.05v48.66h9.05v-21.39h2.86c1.03,0,1.83.13,2.39.39.56.26,1.06.68,1.51,1.26l13.75,17.96c.23.37.5.67.8.92.52-.65,1.06-1.27,1.65-1.85,1.38-1.38,2.94-2.54,4.66-3.53Z" />
            </g>
          </svg>

          <svg className={styles.curve}>
            <motion.path
              variants={curve}
              initial="initial"
              exit="exit"
            ></motion.path>
          </svg>
        </>
      )}
    </motion.div>
  );
};

export default Preloader;
