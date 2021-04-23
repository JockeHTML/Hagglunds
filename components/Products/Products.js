import React from "react";
import Card from "./Card";
import classes from "./Products.module.css";
import BlueButton from "../ui/BlueButton";
import GreenButton from "../ui/GreenButton";

const Products = () => {
  return (
    <div className={classes.products}>
      <div className={classes.title}>
        <h1>
          Våra <span style={{ color: "var(--green)" }}>tjänster</span>
        </h1>
        <p>
          {" "}
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis,
          totam! Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Officiis, totam?
        </p>
      </div>
      <Card />
      <div className={classes.buttons}>
        <GreenButton>Boka nu</GreenButton>
        <BlueButton>Läs mer</BlueButton>
      </div>
    </div>
  );
};

export default Products;
