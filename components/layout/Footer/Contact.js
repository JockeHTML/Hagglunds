import React from "react";
import classes from "./Contact.module.css";
import About from "./About";
import Links from "./Links";

const Contact = () => {
  return (
    <div className={classes.contact}>
      <About />
      <Links />
      <Links />
    </div>
  );
};

export default Contact;
