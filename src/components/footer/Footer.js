import React from "react";

const Footer = () => {
  const { getFullYear } = Date.now();
  return (
    <div>
      <hr
        style={{
          width: "5vw",
          margin: "0 auto",
          borderTop: "5px dotted #0066cc",
        }}
      />
      <h5 style={{ textAlign: "center", marginTop: "10px" }}>
        &copy; Ejoor Emmanuel 2021
      </h5>
    </div>
  );
};

export default Footer;
