import PropTypes from "prop-types";
import { motion } from "framer-motion";
import styles from "./PageTransition.module.scss";
import { useEffect } from "react";

const PageTransition = ({ children }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      document.body.style.cursor = "default";
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <motion.div
        className={styles.slideIn}
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 1, ease: [0.65, 0, 0.35, 1] }}
      />

      {children}

      <motion.div
        className={styles.slideOut}
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 1, ease: [0.65, 0, 0.35, 1] }}
      />
    </>
  );
};

PageTransition.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageTransition;
