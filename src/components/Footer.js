import React from "react";
import Insta from "../images/Instagram Icon.png";
import Twitter from "../images/Twitter Icon.png";
import Facebook from "../images/Facebook Icon.png";
import Github from "../images/GitHub Icon.png";

function Footer() {
  return (
    <div className="footer">
      <img src={Twitter} alt="" />
      <img src={Facebook} alt="" />
      <img src={Insta} alt="" />
      <img src={Github} alt="" />
    </div>
  );
}

export default Footer;
