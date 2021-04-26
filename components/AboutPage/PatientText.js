import React from "react";
import classes from "./PatientText.module.css";

const PatientText = () => {
  return (
    <div className={classes.patientText}>
      <h2>Utbildning & legitimation</h2>
      <p>
        I Sverige sker utbildningen vid Skandinaviska Kiropraktorhögskolan i
        Solna, studierna omfattar fem års heltidsstudier. Socialstyrelsen
        utfärdar yrkeslegitimation efter godkänd examen samt genomförd
        allmäntjänstgöring, inom den svenska hälso- och sjukvården.
        Kiropraktorer är sedan 1999 legitimerade av Socialstyrelsen. Det innebär
        att kiropraktorer står under gällande Patientsäkerhetslag (SFS
        2010:659), samt under tillsyn av Inspektionen för Vård och Omsorg (IVO),
        vilken är den myndighet som idag står för all tillsyn gällande hälso-
        och sjukvård. Titelskydd för kiropraktorer infördes 2006, vilket innebär
        att endast kiropraktorer med adekvat utbildning och av Socialstyrelsen
        utfärdad legitimation har rätten att kalla sig för kiropraktor.
      </p>
    </div>
  );
};

export default PatientText;
