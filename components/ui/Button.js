import React from "react";
import Link from "next/link";
import classes from "./button.module.css";

function Button(props) {
  return (
    <span className={classes.button}>
      <Link href="/about">
        <a href="" className={classes.btn}>
          {props.children}
        </a>
      </Link>
    </span>
  );
}

export default Button;
