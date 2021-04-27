import React from "react";
import classes from "./EducationText.module.css";

const EducationText = () => {
  return (
    <div className={classes.educationText}>
      <h2>För och nackdelar</h2>
      <div className={classes.content}>
        <h4>Fördelar med massage</h4>
        <ul>
          <li>
            <i class="fas fa-angle-right"></i>
            <p>Välbefinnandet ökar, stress minskar</p>
          </li>
          <li>
            <i class="fas fa-angle-right"></i>
            <p>Immunförsvaret stärks</p>
          </li>
          <li>
            <i class="fas fa-angle-right"></i>
            <p>Blod- och lymfcirkulationen förbättras</p>
          </li>
          <li>
            <i class="fas fa-angle-right"></i>
            <p>Snabbare återhämtning</p>
          </li>
        </ul>
        <h4>När massage inte är lämpligt</h4>
        <ul>
          <li>
            <i class="fas fa-angle-right"></i>
            <p>Feber, infektion</p>
          </li>
          <li>
            <i class="fas fa-angle-right"></i>
            <p>Akut inflammation</p>
          </li>
          <li>
            <i class="fas fa-angle-right"></i>
            <p>Akuta skador</p>
          </li>
          <li>
            <i class="fas fa-angle-right"></i>
            <p>Färska frakturer</p>
          </li>
          <li>
            <i class="fas fa-angle-right"></i>
            <p>Hjärt- och kärlsjukdomar</p>
          </li>
          <li>
            <i class="fas fa-angle-right"></i>
            <p>Kraftiga åderbråck, blodpropp, åderförkalkning</p>
          </li>
          <li>
            <i class="fas fa-angle-right"></i>
            <p>Diskbråck</p>
          </li>
          <li>
            <i class="fas fa-angle-right"></i>
            <p>Tumörer/cancer</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default EducationText;
