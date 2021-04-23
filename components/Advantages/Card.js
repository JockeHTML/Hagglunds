import React from "react";
import classes from "./Card.module.css";
import Link from "next/link";

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
            <i className="fas fa-angle-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
