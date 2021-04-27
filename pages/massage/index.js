import React from "react";
import classes from "./massage.module.css";
import Massage from "../../components/Massage/Massage";

const index = () => {
  return (
    <div className={classes.massage}>
      <div className={classes.topImage}>
        <h1>Massage</h1>
      </div>
      <Massage />
    </div>
  );
};

export default index;
