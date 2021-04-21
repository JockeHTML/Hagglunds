import React from "react";
import Button from "@material-ui/core/Button";

const WhiteButton = (props) => {
  return (
    <div>
      <Button
        variant="contained"
        style={{
          backgroundColor: "var(--white)",
          borderRadius: "50px",
          padding: "10px 2.5rem",
          textTransform: "none",
        }}
        href="#contained-buttons"
      >
        <p style={{ color: "var(--blue)" }}>{props.children}</p>
      </Button>
    </div>
  );
};

export default WhiteButton;
