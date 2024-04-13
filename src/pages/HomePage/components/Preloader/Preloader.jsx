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
      <p>Loading...</p>
      {dimension.width > 0 && (
        <>
          <svg>
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
