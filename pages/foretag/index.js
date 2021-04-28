import React from "react";
import classes from "../../styles/foretag.module.css";
import Companys from "../../components/Companys/Companys";
import { companysData } from "../../data";

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
      </div>
    </div>
  );
};

export default index;
