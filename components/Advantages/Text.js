import React from "react";
import classes from "./Text.module.css";
import GreenButton from "../ui/GreenButton";
import Link from "next/link";

const Title = () => {
  return (
    <div className={classes.text}>
      <h2>Vi hjälper dig hela vägen</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi eos
        ab recusandae veritatis sed laboriosam eveniet dolores suscipit. ab
        recusandae veritatis sed laboriosam eveniet dolores suscipit?
      </p>
      <div className={classes.buttons}>
        <Link passHref href="/boka">
          <a>
            <GreenButton>boka</GreenButton>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Title;
