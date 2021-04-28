import React from "react";
import classes from "./Chiropractic.module.css";
import ChiropracticText from "./ChiropracticText";

const Chiropractic = ({ title, text, img }) => {
  return (
    <div className={classes.chiropractic}>
      <ChiropracticText title={title} text={text} img={img} />
    </div>
  );
};

export default Chiropractic;
