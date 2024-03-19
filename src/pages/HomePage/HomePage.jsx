import ContactForm from "../../components/ContactForm/ContactForm";
import styles from "./HomePage.module.scss";

const HomePage = () => {
  return (
    <div>
      <div className={styles.homePageContainer}>
        <ul>
          <li>hello</li>
          <li>yo</li>
          <li>yo</li>
          <li>yo</li>
          <li>yo</li>
        </ul>
      </div>
      <div className={styles.homePageContainer}>
        <ul>
          <li>hello</li>
          <li>yo</li>
          <li>yo</li>
          <li>yo</li>
          <li>yo</li>
        </ul>
      </div>
      <ContactForm />
    </div>
  );
};

export default HomePage;
