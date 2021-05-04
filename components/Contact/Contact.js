import React, { useState } from "react";
import classes from "./Contact.module.css";
import Map from "./Map";
import MapTwo from "./MapTwo";
import Icons from "./Icons";
import { contactDataThree } from "../../data";
import { contactData } from "../../data";

const Contact = () => {
  const [click, setClick] = useState(false);

  return (
    <div className={classes.contact}>
      <h1>
        Kontakta <span>någon</span> av våra kliniker
      </h1>
      <div className={classes.switch}>
        {click ? (
          <span>
            <h3>Sundsvall</h3>
          </span>
        ) : (
          <span>
            <h3>Östersund</h3>
          </span>
        )}
        <div className={classes.btn}>
          <input type="checkbox" id="switch" />
          <label onClick={() => setClick(!click)} for="switch">
            Toggle
          </label>
        </div>
      </div>

      {click ? (
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
      ) : (
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
      )}
    </div>
  );
};

export default Contact;
