import React from "react";
import classes from "./Card.module.css";
import Link from "next/link";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

const Card = ({ title, text, img }) => {
  return (
    <div className={classes.card}>
      <div className={classes.image}>
        <img src={img} alt="" />
      </div>
      <div className={classes.text}>
        <h4>{title}</h4>
        <p>{text}</p>
        <div className={classes.buttons}>
          <a href="">
            Läs mer
            <NavigateNextIcon fontSize="small" style={{ marginTop: "5px" }} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
