import React from "react";
import classes from "./Slider.module.css";
import GreenButton from "../ui/GreenButton";
import Link from "next/link";

const Slider = () => {
  return (
    <div className={classes.slider}>
      <div className={classes.content}>
        <h2>Legitimerade Kiropraktorer</h2>
        <p>
          Kiropraktorerna som arbetar hos Hägglunds är alla legitimerade av
          Socialstyrelsen
        </p>
        <div className={classes.buttons}>
          <Link passHref href="/om-oss">
            <a>
              <GreenButton>Läs mer</GreenButton>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Slider;
