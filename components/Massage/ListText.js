import React from "react";
import classes from "./ListText.module.css";

const ListText = ({ text }) => {
  return (
    <li className={classes.listText}>
      <i className="fas fa-angle-right"></i>
      <p>{text}</p>
    </li>
  );
};

export default ListText;
