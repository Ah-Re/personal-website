import React, { useEffect } from "react";
import "./Projects.css";
import ProjectCard from "./ProjectCard";
import MovieApp from "../../images/movie-search-app.png";
import GithubApp from "../../images/github-app.png";
import KeeperApp from "../../images/keeper-app.png";
import CoffeeRoasters from "../../images/coffee-roasters.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import NewProjectCard from "../NewProjectCard/NewProjectCard";
import Aos from "aos";
import "aos/dist/aos.css";

function Projects() {
  useEffect(() => {
    Aos.init({ duration: 2000, once: true });
  }, []);
  return (
    <section id="projects">
      <div className="projects-section">
        <h1 className="subtitle">Projects</h1>
        <div className="new-project-card-wrapper">
          <NewProjectCard
            ProjectName="Coffee Roasters"
            ProjectTools={["ReactJS", "React-Router"]}
            ProjectDescription="A fully responsive 3-page website for a mock coffee company called Coffee Roasters, 
        where users can get a monthly coffee subscription based on their personal preferences."
            ProjectLink="https://dreamy-pike-1d30db.netlify.app"
            ProjectRepo="https://github.com/Ah-Re/coffee-roasters"
          />
          <NewProjectCard
            ProjectName="Keeper"
            ProjectImage={KeeperApp}
            ProjectTools={["ReactJS", "Firebase"]}
            ProjectDescription="Google Keep Clone where users can create an account with Google authentication
        and write noted reminders. "
            ProjectLink="https://Ah-Re.github.io/keeper/"
            ProjectRepo="https://github.com/Ah-Re/keeper"
          />

          <NewProjectCard
            ProjectName="Devfinder"
            ProjectImage={GithubApp}
            ProjectTools={["ReactJS", "Github Users API"]}
            ProjectDescription="Users can enter a Github username and the application will
            make an API call to the Github API and return data that's 
            presented in an aesthetic way."
            ProjectLink="https://Ah-Re.github.io/github-search-app/"
            ProjectRepo="https://github.com/Ah-Re/github-search-app"
          />

          <NewProjectCard
            ProjectName="Movie Look-Up"
            ProjectImage={MovieApp}
            ProjectTools={[
              "EJS",
              "MongoDB",
              "NodeJS",
              "ExpressJS",
              "PassportJS",
              "OMDB API",
            ]}
            ProjectDescription="Users can search for a movie
            and get back the movie poster, description, and ratings from critics.
            They can also create an account and save their favorite movies."
            ProjectLink="https://polar-cliffs-81569.herokuapp.com"
            ProjectRepo="https://github.com/Ah-Re/movie-search-app"
          />

          <NewProjectCard
            ProjectName="Current Time"
            ProjectImage={MovieApp}
            ProjectTools={[
              "React",
              "Geolocation API",
              "World Time API",
              "Programming Quotes API",
            ]}
            ProjectDescription="Displays time and location data based on user's IP address. Also has programming quotes that update at the click of a button."
            ProjectLink="https://adoring-jepsen-d32bb0.netlify.app"
            ProjectRepo="https://github.com/Ah-Re/time-app"
          />
        </div>
      </div>
    </section>
  );
}

export default Projects;
