import React from "react";
import classes from "./About.module.css";
import Text from "./Text";
import Image from "./Image";

const About = () => {
  return (
    <div className={classes.about}>
      <h1>
        Välj <span style={{ color: "var(--green)" }}>Hägglunds</span>{" "}
        Kiropraktik & Rehab
      </h1>
      <div className={classes.content}>
        <Image />
        <Text />
      </div>
    </div>
  );
};

export default About;
