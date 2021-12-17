import React from 'react';
import { FontAwesomeIcon,  } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub,  } from "@fortawesome/free-brands-svg-icons";

const ProjectCard = (props) => {
    return (
        
        <div className="keeper-app-wrapper" data-aos="fade-up">
        <img className="keeper-app" src={props.ProjectImage}></img>
        <div>
        <h2>{props.ProjectName}</h2>
        {props.ProjectTools.map((tool) => {
            
            return <p className="tool-tags">{tool}</p>
        })}
        <p className="app-description">{props.ProjectDescription}</p>
        <a className="demo" href={props.ProjectLink}>
        <FontAwesomeIcon icon={faExternalLinkAlt} color="#1DB954" size="2x"/>
        </a>
        <a className="code" href={props.ProjectRepo}>
        <FontAwesomeIcon icon={faGithub} color="#1DB954" size="2x"/></a>
        </div>
        </div>
        
    )
}

export default ProjectCard
