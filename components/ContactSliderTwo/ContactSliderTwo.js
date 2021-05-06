import React from "react";
import classes from "./ContactSliderTwo.module.css";
import { contactDataTwo } from "../../data";

const ContactSliderTwo = () => {
  return (
    <div className={classes.contactSlider}>
      <ul>
        {contactDataTwo.map((contact, index) => {
          const { title, text, icon, src } = contact;
          return (
            <li key={index} className={classes.contact}>
              <span className={classes.icons}>
                <i className={icon}></i>
              </span>
              <span>
                <h4>{title}</h4>
                <a href={src}>
                  <p>{text}</p>
                </a>
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ContactSliderTwo;
