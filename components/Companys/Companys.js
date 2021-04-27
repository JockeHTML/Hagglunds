import React from "react";
import classes from "./Companys.module.css";

const Title = ({
  title,
  subtitle,
  text,
  secondText,
  secondTitle,
  thirdText,
}) => {
  return (
    <div className={classes.foretag}>
      <h2>{title}</h2>
      <h4>{subtitle}</h4>
      <p>{text}</p>
      <h2>{secondTitle}</h2>
      <p>{secondText}</p>
      <p>{thirdText}</p>
    </div>
  );
};

export default Title;
