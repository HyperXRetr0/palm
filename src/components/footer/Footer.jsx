import React from "react";
import "./Footer.css";
import logo from "../../assests/logo2.png";

const Footer = () => {
  return (
    <div className="signlang__footer section__padding">
      <div className="signlang__footer-logo">
        <img src={logo} alt="signlang_logo" />
      </div>

      <div className="signlang__footer-copyright">
        <h3>
          <span>Made With Love</span>
          <br />
          By Group 29
        </h3>
      </div>
    </div>
  );
};

export default Footer;
