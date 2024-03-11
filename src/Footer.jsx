import React from "react";

const Footer = ({ length }) => {
  return (
    <footer>
      <p
        style={{
          fontSize: "16px",
          fontStyle: "italic",
          color: "#696866",
          margin: "1rem",
        }}
      >
        you have {length} {length === 1 ? "task" : "tasks"} in your list
      </p>
    </footer>
  );
};

export default Footer;
