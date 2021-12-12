import React, { useEffect } from "react";
import "./Projects.css";
import MovieApp from "../../images/movie-search-app.png";
import GithubApp from "../../images/github-app.png";
import KeeperApp from "../../images/keeper-app.png";
import CoffeeRoasters from "../../images/coffee-roasters.png";
import { FontAwesomeIcon,  } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import { faGithub,  } from "@fortawesome/free-brands-svg-icons";
import Aos from "aos";
import "aos/dist/aos.css";


function Projects() {

    useEffect(() => {
        Aos.init({duration: 2000, once: true})
    }, []
)
    return (
        <section id="projects">
        <div className="projects-section">
        <h1 className="subtitle" data-aos="fade-up">projects</h1>
        <div className="project-pics">
        <div className="keeper-app-wrapper" data-aos="fade-up">
        <img className="keeper-app" src={CoffeeRoasters}></img>
        <div>
        <h2>Coffee Roasters</h2>
        <p className="tool-tags">ReactJS</p>
        <p className="tool-tags">React-Router</p>
        <p className="app-description">A fully responsive 3-page website for a mock coffee company called Coffee Roasters, 
        where users can get a monthly coffee subscription based on their personal preferences.</p>
        <a className="demo" href="https://dreamy-pike-1d30db.netlify.app">
        <FontAwesomeIcon icon={faExternalLinkAlt} color="#1DB954" size="2x"/>
        </a>
        <a className="code" href="https://github.com/Ah-Re/coffee-roasters">
        <FontAwesomeIcon icon={faGithub} color="#1DB954" size="2x"/></a>
        </div>
        </div>

        <div className="keeper-app-wrapper" data-aos="fade-up">
        <img className="keeper-app" src={KeeperApp}></img>
        <div>
        <h2>Keeper</h2>
        <p className="tool-tags">ReactJS</p>
        <p className="tool-tags">Firebase</p>
        <p className="app-description">Users can enter a Github username and the application will
        make an API call to the Github API and return data that's 
        presented to the user in an aesthetic way.</p>
        <a className="demo" href="https://constipated.github.io/keeper/">
        <FontAwesomeIcon icon={faExternalLinkAlt} color="#1DB954" size="2x"/>
        </a>
        <a className="code" href="https://github.com/Constipated/keeper">
        <FontAwesomeIcon icon={faGithub} color="#1DB954" size="2x"/></a>
        </div>
        </div>
        <div className="github-app-wrapper" data-aos="fade-up">
        <img className="github-app" src={GithubApp}></img>
        <div>
        <h2>Devfinder</h2>
        <p className="tool-tags">ReactJS</p>
        <p className="tool-tags">Github Users API</p>
        <p className="app-description">Users can enter a Github username and the application will
        make an API call to the Github API and return data that's 
        presented to the user in an aesthetic way.</p>
        <a className="demo" href="https://constipated.github.io/github-search-app/">
        <FontAwesomeIcon icon={faExternalLinkAlt} color="#1DB954" size="2x"/>
        </a>
        <a className="code" href="https://github.com/Constipated/github-search-app">
        <FontAwesomeIcon icon={faGithub} color="#1DB954" size="2x"/></a>
        </div>
        </div>
        <div className="movie-app-wrapper" data-aos="fade-up">
        <img className="movie-app" src={MovieApp}></img>
        <div>
        <h2>Movie Search</h2>
        <p className="tool-tags">EJS</p>
        <p className="tool-tags">MongoDB</p>
        <p className="tool-tags">NodeJS</p>
        <p className="tool-tags">ExpressJS</p>
        <p className="tool-tags">PassportJS</p>
        <p className="tool-tags">OMDB API</p>
        <p className="app-description">Users can search for a movie
        and get back the movie poster, description, and ratings from critics.
        They can also create an account and save their favorite movies.</p>
        <a className="demo" href="https://polar-cliffs-81569.herokuapp.com">
        <FontAwesomeIcon icon={faExternalLinkAlt} color="#1DB954" size="2x"/>
        </a>
        <a className="code" href="https://github.com/Constipated/movie-search-app">
        <FontAwesomeIcon icon={faGithub} color="#1DB954" size="2x"/>
        </a>
        </div>
        </div>
        
        
        </div>
        </div>
        </section>
    )
}

export default Projects;