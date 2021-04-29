import React from "react";
import classes from "../../styles/behandlingsmetoder.module.css";
import Products from "../../components/Products/Products";
import Companys from "../../components/Companys/Companys";
import { treatmentsData } from "../../data";
const index = () => {
  return (
    <div className={classes.behandlingsbetoder}>
      <div className={classes.topImage}>
        <h1>Behandlingsmetoder</h1>
      </div>
      <div className={classes.content}>
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
      </div>
      <Products />
    </div>
  );
};

export default index;
