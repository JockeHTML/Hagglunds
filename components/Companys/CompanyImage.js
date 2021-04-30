import React from "react";
import classes from "./CompanyImage.module.css";

const CompanyImage = () => {
  return (
    <div className={classes.companyImage}>
      <h1>
        Vanligt <span>använda</span> behandlingar
      </h1>
      <div className={classes.content}>
        <div className={classes.card}>
          <img src="./images/bg2.jpg" alt="" />
          <div className={classes.text}>
            <h3>Behandling SI-led</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              perferendis vero vitae et asperiores nam.
            </p>
          </div>
        </div>
        <div className={classes.card}>
          <img src="./images/bg2.jpg" alt="" />
          <div className={classes.text}>
            <h3>Behandling ländrygg</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              perferendis vero vitae et asperiores nam.
            </p>
          </div>
        </div>
        <div className={classes.card}>
          <img src="./images/bg2.jpg" alt="" />
          <div className={classes.text}>
            <h3>Behandling bröstrygg</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              perferendis vero vitae et asperiores nam.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyImage;
