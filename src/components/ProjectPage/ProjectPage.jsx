import PropTypes from "prop-types";
import styles from "./ProjectPage.module.scss";
import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaArrowRotateLeft } from "react-icons/fa6";

const ProjectPage = ({ src, alt, code, demo, title, techStack, content }) => {
  const handleHomeClick = () => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 1000);
  };

  return (
    <div className="container">
      <div className={styles.pageContainer}>
        <img src={src} alt={alt} />
        <div className={styles.pageLinks}>
          <a href={code} target="_blank" rel="noopener noreferrer">
            CODE <MdArrowOutward />
          </a>
          <a href={demo} target="_blank" rel="noopener noreferrer">
            DEMO <MdArrowOutward />
          </a>
        </div>
        <div className={styles.pageDescription}>
          <h1 className={styles.pageTitle}>{title}</h1>
          <h2>TECH STACK</h2>
          <p>{techStack}</p>
          <h2>ABOUT PROJECT</h2>
          {content}
        </div>
        <Link to="/" className={styles.homeButton} onClick={handleHomeClick}>
          <span>GO BACK HOME</span>
          <i></i>
          <FaArrowRotateLeft />
        </Link>
      </div>
    </div>
  );
};

ProjectPage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
  demo: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  techStack: PropTypes.string.isRequired,
  content: PropTypes.node.isRequired,
};

export default ProjectPage;
