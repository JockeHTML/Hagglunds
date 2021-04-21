import React from "react";
import classes from "./Advantages.module.css";
import Text from "./Text";
import Card from "./Card";
import { cardData } from "../../data";

const Advantages = () => {
  return (
    <div className={classes.advantages}>
      <h1>
        Varför folk <span style={{ color: "var(--green)" }}>väljer</span> oss
      </h1>
      <div className={classes.content}>
        <Text />
        {cardData.map((data, index) => {
          const { title, img, text } = data;
          return <Card key={index} title={title} img={img} text={text} />;
        })}
      </div>
    </div>
  );
};

export default Advantages;
