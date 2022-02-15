import React from "react";
import Insta from "../images/Instagram.png";
import Twitter from "../images/Twitter.png";
import Facebook from "../images/Facebook.png";
import Github from "../images/GitHub.png";

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
