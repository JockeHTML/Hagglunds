import React from "react";
import classes from "./Content.module.css";
import Title from "./Title";
import GreenButton from "../ui/GreenButton";
import BlueButton from "../ui/BlueButton";

const Content = () => {
  return (
    <div className={classes.content}>
      <Title />
      <div className={classes.buttons}>
        <GreenButton>Boka nu</GreenButton>
        <BlueButton>Läs mer</BlueButton>
      </div>
    </div>
  );
};

export default Content;
