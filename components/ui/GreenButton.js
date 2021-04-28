import React from "react";
import classes from "./GreenButton.module.css";

function GreenButton({ children }) {
  return (
    <div className={classes.greenButton}>
      <span>
        <p className={classes.btn}>{children}</p>
      </span>
    </div>
  );
}

export default GreenButton;
