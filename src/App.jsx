import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage/HomePage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import ScrollToTopButton from "./components/ScrollToTopButton/ScrollToTopButton";
import { AnimatePresence } from "framer-motion";
import PageTransition from "./animations/PageTransition/PageTransition";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <AnimatePresence mode="wait">
              <PageTransition key="home">
                <Navbar />
                <HomePage />
                <ScrollToTopButton />
                <Footer />
              </PageTransition>
            </AnimatePresence>
          }
        />

        <Route
          path="/contact"
          element={
            <AnimatePresence mode="wait">
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
            <AnimatePresence mode="wait">
              <PageTransition key="notfound">
                <NotFoundPage />
              </PageTransition>
            </AnimatePresence>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
