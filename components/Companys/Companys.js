import React from "react";
import classes from "./Companys.module.css";

const Title = ({ title, subtitle, text }) => {
  return (
    <div className={classes.foretag}>
      <h2>{title}</h2>
      <h4>{subtitle}</h4>
      <p>{text}</p>
    </div>
  );
};

export default Title;
