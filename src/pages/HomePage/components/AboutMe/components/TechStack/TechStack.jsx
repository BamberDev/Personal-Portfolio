import { nanoid } from "nanoid";
import styles from "./TechStack.module.scss";
import { techStackOptions } from "../../../../../../data/techStackOptions";
import MagneticHover from "../../../../../../animations/MagneticHover/MagneticHover";

const TechStack = () => {
  return (
    <div className={styles.toolContainer}>
      <h1>TOOLS I USE</h1>
      <div className={styles.toolList}>
        {techStackOptions.map((option) => (
          <div className={styles.toolCard} key={nanoid()}>
            <a
              href={option.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Link to tool page"
            >
              <MagneticHover>
                <img src={option.icon} alt={option.alt} />
              </MagneticHover>
            </a>
            <p>{option.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
