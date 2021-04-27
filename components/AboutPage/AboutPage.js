import React from "react";
import classes from "./AboutPage.module.css";
import AboutText from "./AboutText";
import EducationText from "./EducationText";
import Staff from "./Staff";
import { staffData } from "../../data";

const AboutPage = () => {
  return (
    <div className={classes.aboutPage}>
      <div className={classes.content}>
        <AboutText />
        <EducationText />
      </div>
      <div className={classes.staff}>
        <h1>
          Vi som <span style={{ color: "var(--green)" }}>jobbar</span> på
          Hägglunds
        </h1>
        <div className={classes.staffContent}>
          {staffData.map((data, index) => {
            const { text, title, name, img, extra, email } = data;
            return (
              <Staff
                key={index}
                extra={extra}
                img={img}
                name={name}
                title={title}
                email={email}
                text={text}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;