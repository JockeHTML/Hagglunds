import React from "react";
import classes from "./ContactSlider.module.css";
import { contactData } from "../../data";

const ContactSlider = () => {
  return (
    <div className={classes.contactSlider}>
      <ul>
        {contactData.map((contact, index) => {
          const { title, text, icon } = contact;
          return (
            <div key={index} className={classes.contact}>
              <span>
                <i className={icon}></i>
              </span>

              <span>
                <h4>{title}</h4>
                <p>{text}</p>
              </span>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default ContactSlider;
