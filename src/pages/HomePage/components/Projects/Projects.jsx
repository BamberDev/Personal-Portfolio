import { useState, useEffect } from "react";
import styles from "./Projects.module.scss";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import clsx from "clsx";
import { sliderItems } from "../../../../data/projectOptions";

const Projects = () => {
  const [itemActive, setItemActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(handleNextSlider, 5000);
    return () => clearInterval(interval);
  }, [itemActive]);

  const handleNextSlider = () => {
    setItemActive((prevIndex) => (prevIndex + 1) % sliderItems.length);
  };

  const handlePrevSlider = () => {
    setItemActive((prevIndex) =>
      prevIndex === 0 ? sliderItems.length - 1 : prevIndex - 1
    );
  };

  const handleThumbnailClick = (index) => {
    setItemActive(index);
  };

  return (
    <section className="container">
      <div id="projects" className={styles.projectsContainer}>
        <div className={styles.slider}>
          <div className={styles.list}>
            {sliderItems.map((option, index) => (
              <div
                key={index}
                className={clsx(styles.sliderItem, {
                  [styles.activeSlider]: index === itemActive,
                })}
              >
                <img src={option.image} alt={option.alt} />
                <div className={styles.sliderContent}>
                  <p>{option.techStack}</p>
                  <h2>{option.sliderTitle}</h2>
                  <p>{option.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.arrows}>
            <button className={styles.arrowButton} onClick={handlePrevSlider}>
              <FaChevronLeft />
            </button>
            <button className={styles.arrowButton} onClick={handleNextSlider}>
              <FaChevronRight />
            </button>
          </div>
          <div className={styles.thumbnails}>
            {sliderItems.map((option, index) => (
              <div
                key={index}
                className={clsx(styles.thumbnailItem, {
                  [styles.activeThumbnail]: index === itemActive,
                })}
                onClick={() => handleThumbnailClick(index)}
              >
                <img src={option.image} alt={option.alt} />
                <div className={styles.thumbnailContent}>
                  <p>{option.thumbnailTitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
