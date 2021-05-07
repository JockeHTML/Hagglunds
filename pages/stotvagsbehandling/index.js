import React from "react";
import classes from "../../styles/stotvagsbehandling.module.css";
import Companys from "../../components/Companys/Companys";
import { shockwaveData } from "../../data";
import { shockwaveSideListData } from "../../data";
import Link from "next/link";
import BlueButton from "../../components/ui/BlueButton";
import GreenButton from "../../components/ui/GreenButton";
import ListText from "../../components/Massage/ListText";
import CompanyImage from "../../components/Companys/CompanyImage";

const index = () => {
  return (
    <div className={classes.foretag}>
      <div className={classes.topImage}>
        <h1>Behandlingar</h1>
      </div>
      <h1>
        Hur <span>fungerar</span> det?
      </h1>
      <div className={classes.content}>
        <div className={classes.text}>
          {shockwaveData.map((data, index) => {
            const { title, subtitle, text } = data;
            return (
              <Companys
                key={index}
                title={title}
                subtitle={subtitle}
                text={text}
              />
            );
          })}
          <div className={classes.buttons}>
            <Link passHref href="/boka">
              <a>
                <GreenButton>Boka</GreenButton>
              </a>
            </Link>
            <Link passHref href="/kontakt">
              <a>
                <BlueButton>Kontakt</BlueButton>
              </a>
            </Link>
          </div>
        </div>
        <div className={classes.sideText}>
          <h2>För vem?</h2>
          <ul>
            {shockwaveSideListData.map((data, index) => {
              return <ListText key={index} text={data.text} />;
            })}
          </ul>
        </div>
      </div>
      <div className={classes.images}>
        <CompanyImage />
      </div>
    </div>
  );
};

export default index;

/* <div className={classes.listText}>
            <h2>Det vanligaste behandslingstyperna</h2>
            <ul>
              <li>
                <p>
                  <i className="fas fa-angle-right"></i>
                  Fokuserad stötvåg, innebär hög energi som går djupt ner i
                  vävnaden och fokuseras i en specifik punkt
                </p>
              </li>
              <li>
                <p>
                  <i className="fas fa-angle-right"></i>
                  Radial stötvåg/tryckvåg, ger spridning av energi ner i
                  vävnaden med högst energitäthet precis i huden
                </p>
              </li>
            </ul>
          </div>*/
