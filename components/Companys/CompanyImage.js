import React, { useEffect } from "react";
import classes from "./CompanyImage.module.css";
import Aos from "aos";
import "aos/dist/aos.css";

const CompanyImage = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className={classes.companyImage}>
      <h1>
        Vanligt <span>använda</span> behandlingar
      </h1>
      <div data-aos="fade up" className={classes.content}>
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
        <div data-aos="fade up" className={classes.card}>
          <img src="./images/bg2.jpg" alt="" />
          <div className={classes.text}>
            <h3>Behandling ländrygg</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              perferendis vero vitae et asperiores nam.
            </p>
          </div>
        </div>
        <div data-aos="fade up" className={classes.card}>
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
