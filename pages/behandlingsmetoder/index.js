import React from "react";
import classes from "../../styles/behandlingsmetoder.module.css";
import Products from "../../components/Products/Products";
import Companys from "../../components/Companys/Companys";
import { treatmentsData } from "../../data";
import BlueButton from "../../components/ui/BlueButton";
import GreenButton from "../../components/ui/GreenButton";
import Link from "next/link";

const index = () => {
  return (
    <div className={classes.behandlingsbetoder}>
      <div className={classes.topImage}>
        <h1>Behandlingsmetoder</h1>
      </div>

      <div className={classes.content}>
        <h1>Behandslingsmetoder</h1>
        {treatmentsData.map((data, index) => {
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

      <Products />
    </div>
  );
};

export default index;
