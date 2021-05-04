import React, { useEffect } from "react";
import classes from "./Map.module.css";
import Aos from "aos";
import "aos/dist/aos.css";

const Map = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div data-aos="fade in" className={classes.map}>
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
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1848.705939810465!2d17.346554616251428!3d62.39612816847115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x466467371b745d35%3A0x21e5579d97b976d8!2sH%C3%A4gglunds%20Kiropraktik%20%26%20Rehab%20AB!5e0!3m2!1ssv!2sse!4v1620048554856!5m2!1ssv!2sse"
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
