import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import AboutMe from "./components/AboutMe/AboutMe";
import LandingPage from "./components/LandingPage/LandingPage";
import ProjectList from "./components/ProjectList/ProjectList";
import Preloader from "./components/Preloader/Preloader";
import { AnimatePresence } from "framer-motion";

const HomePage = ({ isLoading, setIsLoading }) => {
  const [animationStarted, setAnimationStarted] = useState(false);
  useEffect(() => {
    if (!animationStarted && !isLoading) {
      setAnimationStarted(true);
    }
  }, [animationStarted, isLoading]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.cursor = "default";
    }, 2000);

    window.scrollTo(0, 0);
    return () => clearTimeout(timer);
  }, [setIsLoading]);

  return (
    <div>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      <LandingPage animationStarted={animationStarted} />
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
