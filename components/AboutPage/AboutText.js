import React from "react";
import classes from "./AboutText.module.css";
import PatientText from "./PatientText";

const AboutText = () => {
  return (
    <div className={classes.aboutText}>
      <h2>Hägglunds</h2>
      <p>
        Hägglunds Kiropraktik & Rehab AB grundades under 2012 som ett resultat
        av en sammanslagning av Hägglunds Kiropraktormottagning i Sundsvall och
        Led & Muskelvärkstán i Östersund. Företaget drivs av bröderna Anton och
        Andreas Hägglund, och har idag mottagningar i Sundsvall & Östersund.
        Hägglunds Kiropraktik & Rehab AB har som målsättning att erbjuda vård av
        hög kvalitet med den enskilda individen i fokus, detta mål når vi genom
        ett professionellt omhändertagande, ett personligt bemötande, samt ett
        individuellt upplägg gällande behandling och rehabilitering.
      </p>
      <PatientText />
    </div>
  );
};

export default AboutText;
