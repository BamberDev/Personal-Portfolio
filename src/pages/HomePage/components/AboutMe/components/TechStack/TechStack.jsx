import { nanoid } from "nanoid";
import styles from "./TechStack.module.scss";
import { techStackOptions } from "../../../../../../data/techStackOptions";

const TechStack = () => {
  return (
    <div className={styles.toolContainer}>
      <h1>TOOLS I USE</h1>
      <div className={styles.toolList}>
        {techStackOptions.map((tool) => (
          <div className={styles.toolCard} key={nanoid()}>
            <a href={tool.url} target="_blank" rel="noopener noreferrer">
              <img src={tool.icon} alt={tool.alt} />
            </a>
            <p>{tool.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
