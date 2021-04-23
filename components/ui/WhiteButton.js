import React from "react";
import Link from "next/link";
import classes from "./WhiteButton.module.css";

function WhiteButton(props) {
  return (
    <span className={classes.whiteButton}>
      <Link href="/about">
        <a href="" className={classes.btn}>
          {props.children}
        </a>
      </Link>
    </span>
  );
}

export default WhiteButton;
