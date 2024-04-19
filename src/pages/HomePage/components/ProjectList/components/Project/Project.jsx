import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Project.module.scss";
import { useEffect, useState } from "react";

const Project = ({ index, title, description, path, alt, src, setModal }) => {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  const handleScrollTop = () => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 1000);
  };

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      onMouseEnter={() => {
        setModal({ active: true, index });
      }}
      onMouseLeave={() => {
        setModal({ active: false, index });
      }}
      className={styles.project}
    >
      <Link to={path} onClick={handleScrollTop} aria-label="Link to a project">
        {viewportWidth < 1024 && (
          <div className={styles.imageContainer}>
            <img src={src} alt={alt} />
          </div>
        )}
        <h2>{title}</h2>
        <p>{description}</p>
      </Link>
    </div>
  );
};

Project.propTypes = {
  index: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  setModal: PropTypes.func.isRequired,
};
export default Project;
