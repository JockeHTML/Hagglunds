import React from "react";
import classes from "./Icons.module.css";

const Icons = ({ title, text, icon }) => {
  return (
    <div className={classes.icons}>
      <li className={classes.contact}>
        <span className={classes.icon}>
          <i className={icon}></i>
        </span>
        <span className={classes.text}>
          <h4>{title}</h4>
          <p>{text}</p>
        </span>
      </li>
    </div>
  );
};

export default Icons;
