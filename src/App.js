import React from "react";
import Address from "./components/profile/Address";
import FullName from "./components/profile/FullName";
import ProfilePhoto from "./components/profile/ProfilePhoto";
import Footer from "./components/profile/Footer";
import "./components/styles.css";

export default function App() {
  return (
    <div className="container">
      <div className="main">
        <ProfilePhoto />
        <FullName />
        <Address />
        <Footer />
      </div>
    </div>
  );
}
