import React from "react";
import classes from "./styles.css";
import AboutPage from "../../components/AboutPage/AboutPage";

const index = () => {
  return (
    <div className={classes.om}>
      <div className={classes.topImage}>
        <h1>Om oss</h1>
      </div>
      <AboutPage />
    </div>
  );
};

export default index;
