import React from "react";
import classes from "./EducationText.module.css";
import { massageEducationData } from "../../data";
import ListText from "./ListText";
import { massageEducationData2 } from "../../data";

const EducationText = () => {
  return (
    <div className={classes.educationText}>
      <h2>För och nackdelar</h2>
      <div className={classes.content}>
        <h4>Fördelar med massage</h4>
        <ul>
          {massageEducationData.map((data, index) => {
            return <ListText key={index} text={data.text} />;
          })}
        </ul>
        <h4>När massage inte är lämpligt</h4>
        <ul>
          {massageEducationData2.map((data, index) => {
            return <ListText key={index} text={data.text} />;
          })}
        </ul>
      </div>
    </div>
  );
};

export default EducationText;
