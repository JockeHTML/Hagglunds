import React from "react";
import classes from "./ChiropracticText.module.css";

const ChiropracticText = ({ title, text, img }) => {
  return (
    <div className={classes.chiropracticText}>
      <div className={classes.image}>
        <img src={img} alt={title} />
      </div>
      <div className={classes.text}>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default ChiropracticText;
