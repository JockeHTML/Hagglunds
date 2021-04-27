import React from "react";
import classes from "./sjukvardsforsakring.module.css";
import Companys from "../../components/Companys/Companys";
import { insuranceData } from "../../data";

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
      </div>
    </div>
  );
};

export default index;
