import { nanoid } from "nanoid";
import styles from "./WantToLearn.module.scss";
import { wantToLearnOptions } from "../../../../../../data/wantToLearnOptions";
import MagneticHover from "../../../../../../animations/MagneticHover/MagneticHover";

const WantToLearn = () => {
  return (
    <div className={styles.toLearnContainer}>
      <h1>WANT TO LEARN</h1>
      <div className={styles.toLearnList}>
        {wantToLearnOptions.map((option) => (
          <div className={styles.toLearnCard} key={nanoid()}>
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
export default WantToLearn;
