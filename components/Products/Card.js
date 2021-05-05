import React, { useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { productsData } from "../../data";
import classes from "./Card.module.css";
import Link from "next/link";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Card() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <Grid
      data-aos="fade-up"
      lg={8}
      md={11}
      xl={6}
      container
      item
      spacing={4}
      justify="center"
    >
      {productsData.map((data, index) => {
        const { title, text, icon, link } = data;
        return (
          <Grid key={index} item xs={12} sm={4} md={4} lg={4} xl={4}>
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
