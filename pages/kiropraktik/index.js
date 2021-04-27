import React from "react";
import classes from "./kiropraktik.module.css";
import Chiropractic from "../../components/Chiropractic/Chiropractic";

const index = () => {
  return (
    <div className={classes.kiropraktik}>
      <div className={classes.topImage}>
        <h1>Kiropraktik</h1>
      </div>
      <Chiropractic />
    </div>
  );
};

export default index;
