import React from "react";
import classes from "../../styles/foretag.module.css";
import Companys from "../../components/Companys/Companys";
import { shockwaveData } from "../../data";
import { shockwaveListData } from "../../data";
import Link from "next/link";
import BlueButton from "../../components/ui/BlueButton";
import GreenButton from "../../components/ui/GreenButton";
import ListText from "../../components/Massage/ListText";

const index = () => {
  return (
    <div className={classes.foretag}>
      <div className={classes.topImage}>
        <h1>HVLA-manipulation</h1>
      </div>

      <div className={classes.content}>
        <h1>
          Hur <span>funkar</span> det?
        </h1>
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
            {shockwaveListData.map((data, index) => {
              return <ListText key={index} text={data.text} />;
            })}
          </ul>
        </div>
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
    </div>
  );
};

export default index;
