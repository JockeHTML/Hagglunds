import React from "react";
import Card from "./Card";
import classes from "./Products.module.css";

const Products = () => {
  return (
    <div className={classes.products}>
      <div className={classes.title}>
        <h1>
          Våra <span>tjänster</span>
        </h1>
        <br />
        <p>
          {" "}
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis,
          totam! Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Officiis, totam?
        </p>
      </div>
      <Card />
    </div>
  );
};

export default Products;
