import React from "react";
import Link from "next/link";
import classes from "./GreenButton.module.css";

function GreenButton(props) {
  return (
    <div className={classes.greenButton}>
      <span>
        <Link href="/contact">
          <a href="" className={classes.btn}>
            {props.children}
          </a>
        </Link>
      </span>
    </div>
  );
}

export default GreenButton;
