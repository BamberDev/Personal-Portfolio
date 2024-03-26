import styles from "./HomePage.module.scss";
import LandingPage from "./components/LandingPage/LandingPage";

const HomePage = () => {
  return (
    <div className={styles.homePageContainer}>
      <LandingPage />
    </div>
  );
};

export default HomePage;
