import React from "react";
import { Container } from "semantic-ui-react";
import { Link } from "react-router-dom";

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
      id: 1,
      desc: "Created with React and Semantic UI. An image search widget for web apps.",
      link: "https://searchappwith-react.vercel.app/",
    },
    {
      title: "UI Design for a Social Media Application",
      image:
        "https://res.cloudinary.com/ejooremmanuel/image/upload/v1634259169/socialapp_lg6yfa.png",
      id: 1,
      desc: "Designed using Figma.",
      link: "https://www.figma.com/file/OaxcPxqhgzN7sGRsXkGfPL/solveitapp",
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
    <Container style={{ marginTop: "3%" }}>
      <div class="ui special cards">{renderedProjects}</div>
    </Container>
  );
};

export default Project;
