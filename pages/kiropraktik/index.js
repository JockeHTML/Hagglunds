import React from "react";
import classes from "../../styles/kiropraktik.module.css";
import Chiropractic from "../../components/Chiropractic/Chiropractic";
import { chiropracticData } from "../../data";
import Title from "../../components/Chiropractic/Title";

const index = () => {
  return (
    <div className={classes.kiropraktik}>
      <div className={classes.topImage}>
        <h1>Kiropraktik</h1>
      </div>
      <Title />
      <h1>
        Hur <span>funkar</span> det?
      </h1>
      <div className={classes.content}>
        {chiropracticData.map((data, index) => {
          const { title, text, img } = data;
          return (
            <Chiropractic key={index} title={title} text={text} img={img} />
          );
        })}
      </div>
    </div>
  );
};

export default index;
