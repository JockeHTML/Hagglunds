import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { productsData } from "../../data";
import classes from "./Card.module.css";

export default function Card() {
  return (
    <Grid lg={6} container item spacing={4} justify="center">
      {productsData.map((data, index) => {
        const { title, text, icon } = data;
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
                <a href="">
                  Läs mer
                  <i className="fas fa-angle-right"></i>
                </a>
              </div>
            </Paper>
          </Grid>
        );
      })}
    </Grid>
  );
}
