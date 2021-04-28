import React from "react";
import Card from "./Card";
import classes from "./Products.module.css";
import BlueButton from "../ui/BlueButton";
import GreenButton from "../ui/GreenButton";
import Link from "next/link";

const Products = () => {
  return (
    <div className={classes.products}>
      <div className={classes.title}>
        <h1>
          Våra <span>tjänster</span>
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
  );
};

export default Products;
