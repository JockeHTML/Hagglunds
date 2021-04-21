import React from "react";
import classes from "./Footer.module.css";
import Contact from "./Contact";
import ContactSlider from "../../ContactSlider/ContactSlider";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.content}>
        <ContactSlider />
        <Contact />
      </div>
    </footer>
  );
};

export default Footer;
