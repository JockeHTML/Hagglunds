import React from "react";
import classes from "./PatientText.module.css";

const PatientText = () => {
  return (
    <div className={classes.patientText}>
      <h2>Kvalitet & patientsäkerhet</h2>
      <p>
        Kiropraktorerna som arbetar hos Hägglunds Kiropraktik & Rehab AB är alla
        legitimerade av Socialstyrelsen eller gör sin allmänstjänstgöring
        (AT-tjänst) hos oss. Vi ställer som krav att våra kiropraktorer är
        medlemmar i Kiropraktiska Föreningen i Sverige. Medlemskapet innebär
        strikta etiska regler med höga krav på kvalitetssäkring och kontinuerlig
        vidareutbildning, vidare ger ett medlemskap en heltäckande patient- och
        ansvarsförsäkring, vilket är viktigt för dig som patient.
        Kvalitetssäkringsarbetet bedrivs i enlighet med SOFS 2001:9
        Socialstyrelsens föreskrifter och allmänna råd gällande Ledningssystem
        för systematiskt kvalitetsarbete. Ledningssystemet är framtaget i
        samarbete mellan Skandinaviska Kiropraktorhögskolan och Kiropraktiska
        Föreningen i Sverige (KFS) för att säkerställa att behandlingskvalitet
        och patientsäkerhet är vägledande vid all kontakt med patienter.
        Systemet KvK revideras årligen på grundval av ny lagstiftning,
        forskning, erfarenheter från de i systemet ingående
        kiropraktormottagningarna samt patientenkäter.
      </p>
    </div>
  );
};

export default PatientText;
