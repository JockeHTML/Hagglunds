import React from "react";
import classes from "../../styles/foretag.module.css";
import Companys from "../../components/Companys/Companys";
import { companysData } from "../../data";
import Link from "next/link";
import BlueButton from "../../components/ui/BlueButton";
import GreenButton from "../../components/ui/GreenButton";

const index = () => {
  return (
    <div className={classes.foretag}>
      <div className={classes.topImage}>
        <h1>Företag</h1>
      </div>

      <div className={classes.content}>
        <h1>
          Vi hjälper <span>ditt</span> företag
        </h1>
        {companysData.map((data, index) => {
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
