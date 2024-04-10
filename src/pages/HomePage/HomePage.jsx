import styles from "./HomePage.module.scss";
import AboutMe from "./components/AboutMe/AboutMe";
import LandingPage from "./components/LandingPage/LandingPage";
import ProjectList from "./components/ProjectList/ProjectList";

const HomePage = () => {
  return (
    <div className={styles.homePageContainer}>
      <LandingPage />
      <AboutMe />
      <ProjectList />
    </div>
  );
};

export default HomePage;
