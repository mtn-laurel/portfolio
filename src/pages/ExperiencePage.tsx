import "./ExperiencePage.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare, faFile } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import godotIcon from "../assets/icons/godot.png";
import jiraIcon from "../assets/icons/jira.png";
import figmacIcon from "../assets/icons/figma.png";
import springIcon from "../assets/icons/springboot.png";
import svelteIcon from "../assets/icons/svelte.png";
import typeIcon from "../assets/icons/typescript.png";
import cIcon from "../assets/icons/csharp.png";


export default function ExperiencePage() {
  return (
    <section className="experience-page">
      <div className="links">
        <a href="https://github.com/mtn-laurel" target="_blank">
          <FontAwesomeIcon icon={faGithub} /> Github
        </a> 
        <span className="divider"></span>
        <a href="/portfolio/Emery-L-Jones.pdf" target="_blank">
          <FontAwesomeIcon icon={faFile}/>Resume</a>
        {/* <a href="https://www.linkedin.com/" target="_blank"> LinkedIn</a> */}
      </div>
      
      <h2><strong>Education</strong></h2>
      <div className="school">
        <h3>Louisiana State University — Baton Rouge, LA</h3>
        <p>B.S. Computer Science (Minor in Digital Arts & Engineering)</p>
        <h4>Expected Graduation: Spring 2026</h4>
      </div>
      <div className="school">
        <h3>Baton Rouge Community College — Baton Rouge, LA</h3>
        <h4>Fall 2023 - Fall 2024</h4>
      </div>
      <div className="school">
        <h2><strong>Related Experience</strong></h2>
        <h3>Software Engineer Intern at Junum.io — New Orleans, LA</h3>
        <h4>Summer 2025</h4>
        <ul className="project-details">
          <li>Collaborated with team using Agile Scrum framework, participated in stand-ups</li>
          <li>Implemented UI/functional testing using Cypress for patients' assessment form</li>
          <li>Completed Jira tickets</li>
        </ul>

      </div>

      <div className="projects">
        <h2>Projects</h2>
        <a href="https://github.com/mtn-laurel/LLL" target="_blank" className="project-link">
        Lunar Lander Laika
        <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="project-icon" />
        </a>
        <ul className="project-details">
          <li>Led a 5-member team, facilitating Agile Scrum ceremonies and spring planning</li>
          <li>Implemented UI components and gameplay mechanics in Godot</li>
          <li>Managed Git repository workflow and version control, including pull requests, branch protection, and merges</li>
        </ul>
        <div className="stack">
          <p>Languages & Frameworks : Jira, GDScript, C#, Godot, GitHub</p>
        </div>
        <div className="apps">
            <img src={jiraIcon} alt="Jira" className="jira-icon" />
            <img src={godotIcon} alt="Godot Engine" className="godot-icon" />
            <img src={cIcon} alt="C#" className="c-icon" />
            <FontAwesomeIcon icon={faGithub} className="git-icon"/>
          {/* <a href="https://www.linkedin.com/" target="_blank"> LinkedIn</a> */}
        </div>

        <a href="https://github.com/JH676592/PhishPatrol" target="_blank" className="project-link">
        Phish Patrol
        <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="project-icon" />
        </a>
        <ul className="project-details">
          <li>Used Figma to create prototypes</li>
          <li>Designed and implemented UI</li>
          <li>Participated in and followed the Agile Scrum framework</li>
        </ul>
         <div className="stack">
          <p>Languages & Frameworks : Figma, Svelte, Java (Spring Boot), TypeScript, GithHub </p>
        </div>
        <div className="apps">
            <img src={figmacIcon} alt="figma" className="figma-icon" />
            <img src={svelteIcon} alt="svelte" className="svelte-icon" />
            <img src={springIcon} alt="jira" className="spring-icon" />
            <img src={typeIcon} alt="typescript" className="type-icon" />
            <FontAwesomeIcon icon={faGithub} className="git-icon"/>
          {/* <a href="https://www.linkedin.com/" target="_blank"> LinkedIn</a> */}
        </div>
      </div>
    </section>
  );
}