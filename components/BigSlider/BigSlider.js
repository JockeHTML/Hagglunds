import React from "react";
import classes from "./BigSlider.module.css";
import GreenButton from "../ui/GreenButton";
import Link from "next/link";

const BigSlider = () => {
  return (
    <div className={classes.bigSlider}>
      <div className={classes.image}></div>
      <div className={classes.text}>
        <div className={classes.content}>
          <h2>Boka din tid idag</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut
            laudantium repellendus eos fugiat numquam dolorum accusamus delectus
            magni beatae eius.
          </p>
          <div className={classes.buttons}>
            <Link passHref href="/boka">
              <a>
                <GreenButton>Boka</GreenButton>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BigSlider;
