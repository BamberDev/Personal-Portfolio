import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage/HomePage";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <HomePage />
      </div>
      <Footer />
    </Router>
  );
};

export default App;
