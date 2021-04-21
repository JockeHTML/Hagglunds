import React from "react";
import classes from "./Slider.module.css";
import WhiteButton from "../ui/WhiteButton";

const Slider = () => {
  return (
    <div className={classes.slider}>
      <div className={classes.content}>
        <h3>
          Kiropraktorerna som arbetar hos{" "}
          <span style={{ color: "var(--green)" }}>Hägglunds </span>är alla
          legitimerade av Socialstyrelsen
        </h3>
        <div className={classes.buttons}>
          <WhiteButton>Läs mer</WhiteButton>
        </div>
      </div>
    </div>
  );
};

export default Slider;
