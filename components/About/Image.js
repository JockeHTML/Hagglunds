import React from "react";
import classes from "./Image.module.css";

const Image = () => {
  return (
    <div className={classes.image}>
      <div className={classes.content}>
        {" "}
        <img src="../images/bg3.jpg" alt="Om oss" />
      </div>
    </div>
  );
};

export default Image;
