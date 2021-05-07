import React from "react";
import classes from "./Map.module.css";

const Map = () => {
  return (
    <div className={classes.map}>
      <div className={classes.text}>
        <h2>Kontakta oss i Östersund</h2>
        <p>
          Hägglunds Kiropraktik & Rehab, din kiropraktor i Östersund.
          Tidsbokning görs via internet eller på telefon. Avbokning eller övriga
          frågor skickas via mejl.
        </p>
      </div>
      <iframe
        className={classes.iframe}
        title="Hägglunds Kiropraktik & Rehab Östersund"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1800.814671481217!2d14.68706181627632!3d63.16950470440813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x466fb8f4ffffffff%3A0x47178a749eef88d9!2sH%C3%A4gglunds%20Kiropraktik%20%26%20Rehab!5e0!3m2!1ssv!2sse!4v1620048617583!5m2!1ssv!2sse"
        width="100%"
        height="390px"
        frameBorder="0"
        style={{ border: 0 }}
        allowFullScreen=""
        aria-hidden="false"
        tabIndex="0"
      />
    </div>
  );
};

export default Map;
