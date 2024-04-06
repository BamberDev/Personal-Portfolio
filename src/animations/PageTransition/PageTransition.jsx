import PropTypes from "prop-types";
import { motion } from "framer-motion";
import styles from "./PageTransition.module.scss";

const PageTransition = ({ children }) => {
  return (
    <>
      <motion.div
        className={styles.slideIn}
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 0.5, ease: [0, 0.2, 0.2, 0] }}
      />

      {children}

      <motion.div
        className={styles.slideOut}
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 0.5, ease: [0, 0.2, 0.2, 0] }}
      />
    </>
  );
};

PageTransition.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageTransition;
