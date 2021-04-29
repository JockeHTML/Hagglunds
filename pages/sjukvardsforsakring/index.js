import React from "react";
import classes from "../../styles/sjukvardsforsakring.module.css";
import Companys from "../../components/Companys/Companys";
import { insuranceData } from "../../data";
import Link from "next/link";
import BlueButton from "../../components/ui/BlueButton";
import GreenButton from "../../components/ui/GreenButton";

const index = () => {
  return (
    <div className={classes.sjukvardsforsakring}>
      <div className={classes.topImage}>
        <h1>Sjukvårdsförsäkring</h1>
      </div>

      <div className={classes.content}>
        <h1>
          Möjlighet <span>till</span> behandling
        </h1>
        {insuranceData.map((data, index) => {
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
          <Link passHref href="/kontakt">
            <a>
              <GreenButton>Kontakt</GreenButton>
            </a>
          </Link>
          <Link passHref href="/behandlingsmetoder">
            <a>
              <BlueButton>Tjänster</BlueButton>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default index;
