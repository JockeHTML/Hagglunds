import React from "react";
import classes from "./Massage.module.css";
import MassageText from "./MassageText";
import EducationText from "./EducationText";

const Massage = () => {
  return (
    <div className={classes.massage}>
      <div className={classes.content}>
        <MassageText />
        <EducationText />
      </div>
    </div>
  );
};

export default Massage;
