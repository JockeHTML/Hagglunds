import React from "react";
import classes from "../../styles/foretag.module.css";
import Companys from "../../components/Companys/Companys";
import { hvlaData } from "../../data";
import Link from "next/link";
import BlueButton from "../../components/ui/BlueButton";
import GreenButton from "../../components/ui/GreenButton";
import CompanyImage from "../../components/Companys/CompanyImage";

const index = () => {
  return (
    <div className={classes.foretag}>
      <div className={classes.topImage}>
        <h1>Behandlingar</h1>
      </div>

      <div className={classes.content}>
        <h1>
          Hur <span>fungerar</span> det?
        </h1>
        {hvlaData.map((data, index) => {
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
          <Link passHref href="/om-oss">
            <a>
              <BlueButton>Om oss</BlueButton>
            </a>
          </Link>
        </div>
        <div className={classes.hvlaImages}>
          <CompanyImage />
        </div>
      </div>
    </div>
  );
};

export default index;
