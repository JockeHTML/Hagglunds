import React from "react";
import Appointment from "../../components/Appointment/Appointment";
import classes from "../../styles/boka.module.css";

const index = () => {
  return (
    <div>
      <div className={classes.topImage}>
        <h1>Boka</h1>
      </div>
      <Appointment />
    </div>
  );
};

export default index;
