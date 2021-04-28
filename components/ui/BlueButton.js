import React from "react";
import classes from "./BlueButton.module.css";

function BlueButton(props) {
  return (
    <span className={classes.blueButton}>
      <span>
        <p className={classes.btn}>{props.children}</p>
      </span>
    </span>
  );
}

export default BlueButton;
