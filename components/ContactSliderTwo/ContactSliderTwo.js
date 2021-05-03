import React from "react";
import classes from "./ContactSliderTwo.module.css";
import { contactDataTwo } from "../../data";

const ContactSliderTwo = () => {
  return (
    <div className={classes.contactSlider}>
      <ul>
        {contactDataTwo.map((contact, index) => {
          const { title, text, icon } = contact;
          return (
            <li key={index} className={classes.contact}>
              <span>
                <i className={icon}></i>
              </span>
              <span>
                <h4>{title}</h4>
                <p>{text}</p>
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ContactSliderTwo;
