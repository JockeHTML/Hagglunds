import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { productsData } from "../../data";
import classes from "./Card.module.css";

export default function Card() {
  return (
    <Grid lg={6} container spacing={4}>
      {productsData.map((data, index) => {
        const { title, text, icon } = data;
        return (
          <Grid item lg={4} justify="center">
            <Paper className={classes.paper}>
              <img
                style={{ color: "red" }}
                className={classes.icon}
                src={icon}
                alt=""
              />
              <h4>{title}</h4>
              <p>{text}</p>
            </Paper>
          </Grid>
        );
      })}
    </Grid>
  );
}
