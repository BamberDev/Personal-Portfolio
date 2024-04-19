import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage/HomePage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import ScrollToTopButton from "./components/ScrollToTopButton/ScrollToTopButton";
import { AnimatePresence } from "framer-motion";
import PageTransition from "./animations/PageTransition/PageTransition";
import SpaceInvadersPage from "./pages/ProjectPages/SpaceInvadersPage/SpaceInvadersPage";
import PersonalWebsitePage from "./pages/ProjectPages/PersonalWebsitePage/PersonalWebsitePage";
import ExpenseTrackerPage from "./pages/ProjectPages/ExpenseTrackerPage/ExpenseTrackerPage";
import UrlShortenerPage from "./pages/ProjectPages/UrlShortenerPage/UrlShortenerPage";
import CurrencyConverterPage from "./pages/ProjectPages/CurrencyConverterPage/CurrencyConverterPage";
import { useEffect, useRef, useState } from "react";
import LocomotiveScroll from "locomotive-scroll";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const scrollRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
    });

    return () => {
      scroll.destroy();
    };
  }, []);

  return (
    <div ref={scrollRef}>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <AnimatePresence initial={false} mode="wait">
                <PageTransition key="home">
                  <Navbar />
                  <HomePage isLoading={isLoading} setIsLoading={setIsLoading} />
                  <ScrollToTopButton />
                  <Footer />
                </PageTransition>
              </AnimatePresence>
            }
          />

          <Route
            path="/space-invaders"
            element={
              <AnimatePresence initial={false} mode="wait">
                <PageTransition key="space-invaders">
                  <SpaceInvadersPage />
                </PageTransition>
              </AnimatePresence>
            }
          />
          <Route
            path="/personal-website"
            element={
              <AnimatePresence initial={false} mode="wait">
                <PageTransition key="personal-website">
                  <PersonalWebsitePage />
                </PageTransition>
              </AnimatePresence>
            }
          />
          <Route
            path="/expense-tracker"
            element={
              <AnimatePresence initial={false} mode="wait">
                <PageTransition key="expense-tracker">
                  <ExpenseTrackerPage />
                </PageTransition>
              </AnimatePresence>
            }
          />
          <Route
            path="/url-shortener"
            element={
              <AnimatePresence initial={false} mode="wait">
                <PageTransition key="url-shortener">
                  <UrlShortenerPage />
                </PageTransition>
              </AnimatePresence>
            }
          />
          <Route
            path="/currency-converter"
            element={
              <AnimatePresence initial={false} mode="wait">
                <PageTransition key="currency-converter">
                  <CurrencyConverterPage />
                </PageTransition>
              </AnimatePresence>
            }
          />

          <Route
            path="/contact"
            element={
              <AnimatePresence initial={false} mode="wait">
                <PageTransition key="contact">
                  <Navbar />
                  <ContactPage />
                  <Footer />
                </PageTransition>
              </AnimatePresence>
            }
          />

          <Route
            path="*"
            element={
              <AnimatePresence initial={false} mode="wait">
                <PageTransition key="notfound">
                  <NotFoundPage />
                </PageTransition>
              </AnimatePresence>
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
