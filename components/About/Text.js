import React, { useEffect } from "react";
import classes from "./Text.module.css";
import BlueButton from "../ui/BlueButton";
import GreenButton from "../ui/GreenButton";
import Link from "next/link";
import Aos from "aos";
import "aos/dist/aos.css";

const Text = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <div data-aos="fade-right" className={classes.text}>
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
        <Link passHref href="/kontakt">
          <a>
            <GreenButton>Kontakt</GreenButton>
          </a>
        </Link>
        <Link passHref href="/om-oss">
          <a>
            <BlueButton>Läs mer</BlueButton>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Text;
