import React from "react";
import "./Footer.scss";

const Footer = ({ setFooterOverride }) => {
  setTimeout(() => {
    setFooterOverride(true);
  }, 20000);
  return (
    <footer className="active">
      <button onClick={() => setFooterOverride(true)}>
        <span className="material-icons">close</span>
      </button>
      Created by{" "}
      <a href="www.github.com/BhudiaMukund" target="_blank">
        BhudiaMukund
      </a>
      {" - "}
      devChallenges.io
    </footer>
  );
};

export default Footer;
