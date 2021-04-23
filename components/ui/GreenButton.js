import React from "react";
import Link from "next/link";
import classes from "./GreenButton.module.css";

function GreenButton(props) {
  return (
    <span className={classes.greenButton}>
      <Link href="/about">
        <a href="" className={classes.btn}>
          {props.children}
        </a>
      </Link>
    </span>
  );
}

export default GreenButton;
