import React from "react";
import classes from "./Footer.module.css";
import Contact from "./Contact";
import ContactSliderTwo from "../../ContactSliderTwo/ContactSliderTwo";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.content}>
        <ContactSliderTwo />
        <Contact />
      </div>
    </footer>
  );
};

export default Footer;
