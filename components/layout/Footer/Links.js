import React from "react";
import classes from "./Links.module.css";
import { footerLinksData } from "../../../data";
import Link from "next/link";

const Links = () => {
  return (
    <div className={classes.links}>
      <h3>Länkar</h3>
      <ul>
        {footerLinksData.map((data, index) => {
          const { title, link } = data;
          return (
            <li key={index}>
              <Link href={link}>
                <a>
                  <span>
                    <i className="fas fa-angle-right"></i>
                    <p>{title}</p>
                  </span>
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Links;
