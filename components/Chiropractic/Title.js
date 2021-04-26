import React from "react";
import classes from "./Title.module.css";

const Title = () => {
  return (
    <div className={classes.title}>
      <h2>Vad är Kiropraktik?</h2>
      <p>
        Kiropraktik är i dag ett primärvårdgivande yrke med unika principer
        relaterade till rörelseapparatens funktion, samt individens hälsa och
        välmående. Undersökning och behandlingen sker primärt med händerna och
        ordet kiropraktor kommer från grekiskans chiro = händer, praktos = att
        göra. Vanliga besvär och sökorsaker är ryggont, huvudvärk, nackspärr och
        ischias, men även idrottsskador, arbetsrelaterade besvär samt ryggbesvär
        under och efter graviditet.
      </p>
      <br />
      <p>
        Det finns en rad olika orsaker till varför vi upplever smärta eller
        utvecklar en funktionsstörning i rörelseapparaten, t.ex. ojämn
        belastning, monotona arbetsuppgifter, dålig ergonomi, ogynnsam
        kroppshållning, stress, trauma etc. En funktionsstörning kan ha
        förelegat under en lång tid innan smärtsymtom träder fram.
      </p>
      <br />
      <h2>Forskning & Evidens</h2>
      <p>
        Forskning & Evidens Kiropraktik vilar på naturvetenskapliga principer,
        förankrade i dagens vetenskap. De förklaringsmodeller som används inom
        kiropraktiken vilar på samma vetenskapliga grund som den traditionella
        medicinen och utvecklas i takt med aktuell forskning. På senare tid har
        flera studier och rapporter granskat kiropraktisk behandling och visar
        att kiropraktisk behandling är evidensbaserad, säker och effektiv vård.
        På www.kiropraktik.com har Kiropraktisk Föreningen i Sverige gjort en
        översikt kring detta.
      </p>
    </div>
  );
};

export default Title;
