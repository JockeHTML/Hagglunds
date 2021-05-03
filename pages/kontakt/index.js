import React from "react";
import classes from "../../styles/kontakt.module.css";
import Contact from "../../components/Contact/Contact";

const index = () => {
  return (
    <div className={classes.kontakt}>
      <div className={classes.topImage}>
        <h1>Kontakt</h1>
      </div>
      <div className={classes.content}>
        <Contact />
      </div>
    </div>
  );
};

export default index;
