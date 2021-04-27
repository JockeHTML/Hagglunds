import React from "react";
import classes from "./Chiropractic.module.css";
import Title from "./Title";
import ChiropracticText from "./ChiropracticText";
import { chiropracticData } from "../../data";

const Chiropractic = () => {
  return (
    <div className={classes.chiropractic}>
      <Title />
      <h1>
        Hur <span style={{ color: "var(--green)" }}>funkar</span> det?
      </h1>

      {chiropracticData.map((data, index) => {
        const { title, text, img } = data;
        return (
          <ChiropracticText key={index} title={title} text={text} img={img} />
        );
      })}
    </div>
  );
};

export default Chiropractic;
