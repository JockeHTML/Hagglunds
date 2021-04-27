import React from "react";
import classes from "./MassageText.module.css";

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
      <h2>För dig som har</h2>
      <ul>
        <li>
          <i class="fas fa-angle-right"></i>
          <p>Spända och trötta muskler</p>
        </li>
        <li>
          <i class="fas fa-angle-right"></i>
          <p>Ont i nacke/axlar/rygg</p>
        </li>
        <li>
          <i class="fas fa-angle-right"></i>
          <p>Tränat hårt och vill ha snabbare återhämtning</p>
        </li>
        <li>
          <i class="fas fa-angle-right"></i>
          <p>Skadat dig och är i rehabiliteringsfas</p>
        </li>
        <li>
          <i class="fas fa-angle-right"></i>
          <p>Behov av att koppla av efter vardagens stress</p>
        </li>
      </ul>
    </div>
  );
};

export default AboutText;
