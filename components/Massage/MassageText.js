import React from "react";
import classes from "./MassageText.module.css";
import { massageListTextData } from "../../data";
import ListText from "./ListText";

const AboutText = () => {
  return (
    <div className={classes.massageText}>
      <h2>Massage</h2>
      <h4>
        Kropp & Hälsa by Malin erbjuder klassisk massage i Hägglunds Kiropraktik
        & Rehabs lokaler i Östersund.
      </h4>
      <p>
        Malin är medlem i Kroppsterapeuternas Yrkesförbund och har därmed
        gällande patient- och ansvarsförsäkring. Mer information och tidsbokning
        sker via Malins <span>bokningssida</span>, telefon{" "}
        <span>070-610 32 03</span> eller via{" "}
        <span>kropphalsabymalin@gmail.com</span>.
      </p>
      <br />
      <p>
        Massage kan användas i förebyggande och/eller rehabiliterande syfte.
        Massage ökar blodcirkulationen i kroppen och gör spända muskler mjuka
        och elastiska. Vid en massagebehandling utsöndras det lugnande hormonet
        oxytocin från hjärnan, vilket sänker nivån av stresshormon och känslan
        av lugn och harmoni ökar, men även en frisättning av endorfiner sker,
        vilket ger en smärtlindrande effekt.
      </p>
      <br />
      <div className={classes.listText}>
        <h2>För dig som har</h2>
        <ul>
          {massageListTextData.map((data, index) => {
            return <ListText key={index} text={data.text} />;
          })}
        </ul>
      </div>
    </div>
  );
};

export default AboutText;
