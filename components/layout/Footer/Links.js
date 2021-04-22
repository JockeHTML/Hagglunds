import React from "react";
import classes from "./Links.module.css";
import { linksData } from "../../../data";

const Links = () => {
  return (
    <div className={classes.links}>
      <h3>Länkar</h3>
      <ul>
        {linksData.map((data, index) => {
          const { title, link } = data;
          return (
            <li key={index}>
              <a href="">
                <span>
                  <i className="fas fa-angle-right"></i>
                  <p>{title}</p>
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Links;
