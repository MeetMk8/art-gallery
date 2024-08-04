import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer"; // Import the Footer
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Art from "./pages/Art";
import Login from "./pages/Login";
import Register from "./pages/Register";
import BackToTopButton from "./components/BackToTopButton"; // Import the BackToTopButton

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/art" element={<Art />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </main>
        <BackToTopButton /> {/* Add the BackToTopButton */}
        <Footer /> {/* Add the Footer at the bottom */}
      </div>
    </Router>
  );
}

export default App;
