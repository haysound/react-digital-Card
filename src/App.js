import React from "react";
import About from "./components/About";
import Info from "./components/Info";
import Interest from "./components/Interest";
import Footer from "./components/Footer";
import "./components/styles.css";

export default function App() {
  return (
    <div className="container">
      <div className="main">
        <Info />
        <About />
        <Interest />
        <Footer />
      </div>
    </div>
  );
}
