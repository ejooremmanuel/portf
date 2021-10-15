import React from "react";
import { Container } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "./Image.css";

const Image = () => {
  return (
    <Container
      className="bg"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="left">
        <h2>Hi! I'm</h2>
        <h1>Emmanuel Ejoor</h1>
        <h3>I am a full stack developer.</h3>
        <h4 style={{ paddingRight: "120px" }}>
          I have proven experience and skills in designing awesome and
          interactive UI interfaces and platforms using React, NodeJS, Express
          and MongoDB.
        </h4>
        <button class="ui primary button">
          <Link to="/project" style={{ color: "#fff" }}>
            See projects...
          </Link>
        </button>
      </div>
      <div className="right">
        <img
          src="https://res.cloudinary.com/ejooremmanuel/image/upload/v1634137371/ikql4bmrnctccjbv3lk5.png"
          alt=""
        />
      </div>
    </Container>
  );
};

export default Image;
