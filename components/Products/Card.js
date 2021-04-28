import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { productsData } from "../../data";
import classes from "./Card.module.css";
import Link from "next/link";

export default function Card() {
  return (
    <Grid lg={6} container item spacing={4} justify="center">
      {productsData.map((data, index) => {
        const { title, text, icon, link } = data;
        return (
          <Grid key={index} item lg={4}>
            <Paper className={classes.paper}>
              <img
                style={{ color: "red" }}
                className={classes.icon}
                src={icon}
                alt=""
              />
              <h4>{title}</h4>
              <p>{text}</p>
              <div className={classes.buttons}>
                <Link href={`/${link}`}>
                  <a>
                    Läs mer
                    <i className="fas fa-angle-right"></i>
                  </a>
                </Link>
              </div>
            </Paper>
          </Grid>
        );
      })}
    </Grid>
  );
}
