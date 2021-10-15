import React from "react";
import { Link } from "react-router-dom";
import { Container } from "semantic-ui-react";
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
        <h4 style={{ paddingRight: "50px" }}>
          I have proven experience and skills in designing awesome and
          interactive UI interfaces and platforms using React, NodeJS, Express
          and MongoDB.
        </h4>
        <button class="ui primary button">
          <Link to="/project" style={{ color: "#fff" }}>
            See projects...
          </Link>
        </button>
        <div class="ui list">
          <div class="item">
            <i class="marker icon"></i>
            <div class="content">Abuja, NG</div>
          </div>
          <div class="item">
            <i class="mail icon"></i>
            <div class="content">
              <a href="mailto:ejooremmanuel@gmail.com">
                ejooremmanuel@gmail.com
              </a>
            </div>
          </div>
          <div class="item">
            <i class="linkedin icon"></i>
            <div class="content">
              <a href="https://www.linkedin.com/in/emmanuelejoor">Linkedin</a>
            </div>
          </div>
          <div class="item">
            <i class="github icon"></i>
            <div class="content">
              <a href="https://github.com/ejooremmanuel">GitHub</a>
            </div>
          </div>
        </div>
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
