import AboutMe from "./components/AboutMe/AboutMe";
import LandingPage from "./components/LandingPage/LandingPage";
import ProjectList from "./components/ProjectList/ProjectList";

const HomePage = () => {
  return (
    <div>
      <LandingPage />
      <AboutMe />
      <ProjectList />
    </div>
  );
};

export default HomePage;
