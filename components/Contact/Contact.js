import React from "react";
import classes from "./Contact.module.css";
import Map from "./Map";
import MapTwo from "./MapTwo";
import Icons from "./Icons";
import { contactDataThree } from "../../data";
import { contactData } from "../../data";

const Contact = () => {
  return (
    <div className={classes.contact}>
      <h1>
        <span>Sundsvalls</span> kontoret
      </h1>
      <div className={classes.sundsvall}>
        <div className={classes.content}>
          <ul>
            {contactDataThree.map((data, index) => {
              const { text, icon, title } = data;
              return (
                <Icons key={index} text={text} icon={icon} title={title} />
              );
            })}
          </ul>
        </div>
        <Map />
      </div>
      <h1>
        <span>Östersunds</span> kontoret
      </h1>
      <div className={classes.ostersund}>
        <div className={classes.content}>
          <ul>
            {contactData.map((data, index) => {
              const { text, icon, title } = data;
              return (
                <Icons key={index} text={text} icon={icon} title={title} />
              );
            })}
          </ul>
        </div>
        <MapTwo />
      </div>
    </div>
  );
};

export default Contact;
