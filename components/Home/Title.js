import React from "react";
import classes from "./Title.module.css";

const Title = () => {
  return (
    <div className={classes.title}>
      <h1>
        Vi är <span>proffs</span> på allt inom Kiropraktik och Rehab
      </h1>
      <p>
        Hägglunds Kiropraktik & Rehab AB har som målsättning att erbjuda
        effektiv vård av hög kvalitet med den enskilda individen i fokus, detta
        mål når vi genom ett professionellt omhändertagande, ett personligt
        bemötande, samt ett individuellt upplägg gällande behandling och
        rehabilitering.
      </p>
    </div>
  );
};

export default Title;
