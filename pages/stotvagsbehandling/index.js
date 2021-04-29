import React from "react";
import classes from "../../styles/stotvagsbehandling.module.css";
import Companys from "../../components/Companys/Companys";
import { shockwaveData } from "../../data";
import { massageEducationData2 } from "../../data";
import Link from "next/link";
import BlueButton from "../../components/ui/BlueButton";
import GreenButton from "../../components/ui/GreenButton";
import ListText from "../../components/Massage/ListText";

const index = () => {
  return (
    <div className={classes.foretag}>
      <div className={classes.topImage}>
        <h1>Stötvågsbehandling</h1>
      </div>
      <h1>
        Hur <span>funkar</span> det?
      </h1>
      <div className={classes.content}>
        <div className={classes.text}>
          {shockwaveData.map((data, index) => {
            const {
              title,
              subtitle,
              text,
              secondText,
              secondTitle,
              thirdText,
            } = data;
            return (
              <Companys
                key={index}
                title={title}
                subtitle={subtitle}
                text={text}
                secondText={secondText}
                secondTitle={secondTitle}
                thirdText={thirdText}
              />
            );
          })}
          <br />
          <div className={classes.listText}>
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
          </div>
          <br />
          <h2>Inte för dig som</h2>
          <p>
            Vem bör inte behandlas med stötvåg? Du bör undvika
            stötvågsbehandling om du samtidigt genomgår en annan behandling, som
            till exempel kortisoninjektioner, antiinflammatoriska läkemedel
            eller blodförtunnande mediciner. Har du hjärtbesvär, en ökad
            blödningstendens eller är gravid ska du inte genomgå
            stötvågsbehandling.
          </p>
          <br />
          <h2>Forskning & Evidens</h2>
          <p>
            Forskning som gjorts visar på att behandling ofta ger mycket goda
            resultat med en förbättring på emllan 65-95 procent. Önskar du mer
            utförlig information gällande aktuell forskning så hänvisar vi till
            denna informationsbank.
          </p>
          <div className={classes.buttons}>
            <Link passHref href="/kontakt">
              <a>
                <GreenButton>Kontakt</GreenButton>
              </a>
            </Link>
            <Link passHref href="/om-oss">
              <a>
                <BlueButton>Om oss</BlueButton>
              </a>
            </Link>
          </div>
        </div>
        <div className={classes.sideText}>
          <h2>När?</h2>
          <ul>
            {massageEducationData2.map((data, index) => {
              return <ListText key={index} text={data.text} />;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default index;
