import React from "react";
import profile from "../images/alok.jpg";

export default function Main() {
  return (
    <div className="info-container">
      <img src={profile} alt="" />
      <h2>Ayomide Ayansiji</h2>
      <p>Frontend Developer</p>
      <h6>ayomideayansiji@ymail.com</h6>
      <div className="button">
        <button className="mail">
          <i class="fas fa-envelope">&nbsp; Email</i>
        </button>
        <button className="linkedin">
          <i class="fab fa-linkedin">&nbsp;Linkedin</i>
        </button>
      </div>
    </div>
  );
}
