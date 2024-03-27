import styles from "./HomePage.module.scss";
import AboutMe from "./components/AboutMe/AboutMe";
import LandingPage from "./components/LandingPage/LandingPage";

const HomePage = () => {
  return (
    <div className={styles.homePageContainer}>
      <LandingPage />
      <AboutMe />
    </div>
  );
};

export default HomePage;
