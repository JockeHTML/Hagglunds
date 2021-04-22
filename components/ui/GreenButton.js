import React from "react";
import Button from "@material-ui/core/Button";
import classes from "./Button.module.css";

const GreenButton = (props) => {
  return (
    <div className={classes.button}>
      <Button
        variant="contained"
        style={{
          backgroundColor: "var(--green)",
          color: "var(--white)",
          marginRight: "1rem",
          borderRadius: "50px",
          padding: "10px 2.5rem",
          textTransform: "none",
        }}
      >
        <p style={{ color: "white" }}>{props.children}</p>
      </Button>
    </div>
  );
};

export default GreenButton;
