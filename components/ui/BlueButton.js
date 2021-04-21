import React from "react";
import Button from "@material-ui/core/Button";

const GreenButton = (props) => {
  return (
    <div>
      <Button
        variant="contained"
        style={{
          backgroundColor: "var(--blue)",
          borderRadius: "50px",
          padding: "10px 2.5rem",
          textTransform: "none",
        }}
        href="#contained-buttons"
      >
        <p style={{ color: "white" }}>{props.children}</p>
      </Button>
    </div>
  );
};

export default GreenButton;
