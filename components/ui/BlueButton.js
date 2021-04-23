import React from "react";
import Link from "next/link";
import classes from "./BlueButton.module.css";

function BlueButton(props) {
  return (
    <span className={classes.blueButton}>
      <Link href="/contact">
        <a href="" className={classes.btn}>
          {props.children}
        </a>
      </Link>
    </span>
  );
}

export default BlueButton;
