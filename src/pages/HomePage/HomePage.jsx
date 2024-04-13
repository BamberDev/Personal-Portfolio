import { useEffect } from "react";
import PropTypes from "prop-types";
import AboutMe from "./components/AboutMe/AboutMe";
import LandingPage from "./components/LandingPage/LandingPage";
import ProjectList from "./components/ProjectList/ProjectList";
import Preloader from "./components/Preloader/Preloader";
import { AnimatePresence } from "framer-motion";

const HomePage = ({ isLoading, setIsLoading }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.cursor = "default";
      window.scrollTo(0, 0);
    }, 1500);

    return () => clearTimeout(timer);
  }, [setIsLoading]);

  return (
    <div>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      <LandingPage />
      <AboutMe />
      <ProjectList />
    </div>
  );
};

HomePage.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  setIsLoading: PropTypes.func.isRequired,
};

export default HomePage;
