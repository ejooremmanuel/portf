import React from "react";
import { Container } from "semantic-ui-react";

const Project = () => {
  const projects = [
    {
      title: "A Youtube Video Search Widget",
      image:
        "https://res.cloudinary.com/ejooremmanuel/image/upload/v1634258065/youtubesearch_b31kcz.png",
      id: 1,
      desc: "Created with React and Semantic UI. A video search widget for web apps.",
      link: "https://youtubesearchwithreact.vercel.app/",
    },
    {
      title: "An Image Search Widget",
      image:
        "https://res.cloudinary.com/ejooremmanuel/image/upload/v1634258932/imagesearch_kmcevo.png",
      id: 2,
      desc: "Created with React and Semantic UI. An image search widget for web apps.",
      link: "https://searchappwith-react.vercel.app/",
    },
    {
      title: "A Survey App",
      image:
        "https://res.cloudinary.com/ejooremmanuel/image/upload/v1634259797/survey_d52g09.png",
      id: 3,
      desc: "Created with Node.js, MongoDB and Express",
      link: "https://surveywaaw.herokuapp.com/",
    },
    {
      title: "A Website for a Start Up",
      image:
        "https://res.cloudinary.com/ejooremmanuel/image/upload/v1634260129/genius_knd2ad.png",
      id: 4,
      desc: "Created using WordPres",
      link: "https://thegeniuscomputinghub.org.ng/",
    },
    {
      title: "UI Design for a Social Media Application",
      image:
        "https://res.cloudinary.com/ejooremmanuel/image/upload/v1634259169/socialapp_lg6yfa.png",
      id: 5,
      desc: "Designed using Figma.",
      link: "https://www.figma.com/file/OaxcPxqhgzN7sGRsXkGfPL/solveitapp",
    },
    {
      title: "Todo Application",
      image:
        "https://res.cloudinary.com/ejooremmanuel/image/upload/v1635013791/todo_u0hoqn.png",
      id: 5,
      desc: "Created with Node.js and Express",
      link: "https://todobyejoor.herokuapp.com/",
    },
  ];

  const renderedProjects = projects.map(({ title, image, id, desc, link }) => {
    return (
      <div class="card" key={id}>
        <div class="blurring dimmable image">
          <div class="ui dimmer">
            <div class="content">
              <div class="center">
                <div class="ui inverted button">View Project</div>
              </div>
            </div>
          </div>
          <img src={image} alt="" />
        </div>
        <div class="content">
          <a class="header" href={link} rel="noreferrer" target="_blank">
            {title}
          </a>
          <div class="meta">
            <span class="date">{desc}</span>
          </div>
        </div>
      </div>
    );
  });

  return (
    <Container style={{ margin: "3% 0", overflowY: "scroll", height: "70vh" }}>
      <div class="ui special cards">{renderedProjects}</div>
    </Container>
  );
};

export default Project;
