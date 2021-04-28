import React from "react";
import classes from "./Content.module.css";
import Title from "./Title";
import GreenButton from "../ui/GreenButton";
import BlueButton from "../ui/BlueButton";
import Link from "next/link";

const Content = () => {
  return (
    <div className={classes.content}>
      <Title />
      <div className={classes.buttons}>
        <Link passHref href="/kontakt">
          <a>
            <GreenButton>Kontakt</GreenButton>
          </a>
        </Link>
        <Link passHref href="/om-oss">
          <a>
            <BlueButton>Läs mer</BlueButton>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Content;
