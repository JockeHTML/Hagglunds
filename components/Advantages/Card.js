import React, { useEffect } from "react";
import classes from "./Card.module.css";
import Link from "next/link";
import Aos from "aos";
import "aos/dist/aos.css";

const Card = ({ title, text, img }) => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <div data-aos="fade-left" className={classes.card}>
      <div className={classes.image}>
        <img src={img} alt="" />
      </div>
      <div className={classes.text}>
        <h4>{title}</h4>
        <p>{text}</p>
        <div className={classes.buttons}>
          <Link href="/om-oss">
            <a>
              Läs mer
              <i className="fas fa-angle-right"></i>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
