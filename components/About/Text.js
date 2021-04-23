import React from "react";
import classes from "./Text.module.css";
import BlueButton from "../ui/BlueButton";
import GreenButton from "../ui/GreenButton";

const Text = () => {
  return (
    <div className={classes.text}>
      <div className={classes.content}>
        <h2>Hägglunds historia</h2>
        <p>
          Hägglunds Kiropraktik & Rehab AB grundades under 2012 som ett resultat
          av en sammanslagning av Hägglunds Kiropraktormottagning i Sundsvall
          och Led & Muskelvärkstán i Östersund. Företaget drivs av bröderna
          Anton och Andreas Hägglund, och har idag mottagningar i Sundsvall &
          Östersund.
        </p>
        <br />
        <p>
          Hägglunds Kiropraktik & Rehab AB har som målsättning att erbjuda vård
          av hög kvalitet med den enskilda individen i fokus, detta mål når vi
          genom ett professionellt omhändertagande, ett personligt bemötande,
          samt ett individuellt upplägg gällande behandling och rehabilitering.
        </p>
      </div>
      <div className={classes.buttons}>
        <GreenButton>Kontakt</GreenButton>
        <BlueButton>Läs mer</BlueButton>
      </div>
    </div>
  );
};

export default Text;
