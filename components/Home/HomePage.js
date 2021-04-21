import React from "react";
import classes from "./HomePage.module.css";
import Content from "./Content";

const HomePage = () => {
  return (
    <div className={classes.homePage}>
      <Content />
    </div>
  );
};

export default HomePage;
