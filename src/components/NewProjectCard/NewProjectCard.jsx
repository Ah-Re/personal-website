import React from "react";
import "./NewProjectCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt, faFolder } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const NewProjectCard = (props) => {
  return (
    <div className="new-project-card">
      <div className="icons">
        <FontAwesomeIcon icon={faFolder} color="#1DB954" size="2x" />
        <div>
          <a href={props.ProjectLink}>
            <FontAwesomeIcon
              className="link-icon"
              icon={faExternalLinkAlt}
              color="white"
              size="lg"
            />
          </a>
          <a href={props.ProjectRepo}>
            <FontAwesomeIcon
              className="github-icon"
              icon={faGithub}
              color="white"
              size="lg"
            />
          </a>
        </div>
      </div>
      <h2>{props.ProjectName}</h2>
      <p>{props.ProjectDescription}</p>
      <ul className="project-tools">
        {props.ProjectTools.map((tool, index) => {
          return <li>{tool}</li>;
        })}
      </ul>
    </div>
  );
};

export default NewProjectCard;
