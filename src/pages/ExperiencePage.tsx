import "./ExperiencePage.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare, faFile } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import godotIcon from "../assets/icons/godot.png";
import jiraIcon from "../assets/icons/jira.png";
import figmaIcon from "../assets/icons/figma.png";
import springIcon from "../assets/icons/springboot.png";
import svelteIcon from "../assets/icons/svelte.png";
import typeIcon from "../assets/icons/typescript.png";
import cIcon from "../assets/icons/csharp.png";
import javaIcon from "../assets/icons/java.png";
import blenderIcon from "../assets/icons/blender.png";
import unityIcon from "../assets/icons/unity.png";
import metaIcon from "../assets/icons/meta.png";



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


      {/* ----------------- EDUCATION ------------------*/}
      <h2><strong>Education</strong></h2>
      <div className="school">
        <h3>Louisiana State University — Baton Rouge, LA</h3>
        <p>B.S. Computer Science (Minor in Digital Media, Art, & Technology)</p>
        <h4>Graduated Cum Laude August 2026</h4>
      </div>
      <div className="school">
        <h3>Baton Rouge Community College — Baton Rouge, LA</h3>
        <h4>Fall 2023 - Fall 2024</h4>
      </div>
      <div className="school">

      {/* ---------------- RELATED EXPERIENCE -----------------*/}
        <h2><strong>Related Experience</strong></h2>

        {/* ------------ LAB WORK --------------*/}
        <h3>Research Assistant in the Aging, Cognition, and Technology (ACT) Lab at Louisiana State University — Baton Rouge, LA</h3>
        <h4>Summer 2026</h4>
        <ul className="project-details">
          <li>Recruited and interviewed older adults in Louisiana for a study on developing an AI-powered career tool</li>
          <li>Thematically analyzed data using qualitative research procedures and co-created a codebook</li>
          <li>Peer author on the published paper</li>
        </ul>


        {/* ------------ JUNUM --------------*/}
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

        {/* ------------------ HUE PARADOX ------------------ */}

        <a href="https://github.com/mtn-laurel/Circle" target="_blank" className="project-link">
        Hue Paradox
        <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="project-icon" />
        </a>
        <div className="project-description">
          <p>Description:</p>
          <p>Interdisciplinary group project course, combining art and electrical engineering students. Our group of 6 created an interactive and immersive virtual reality experience with Meta's Oculus that allows users to explore how colors, specifically red and blue, influence risk-taking behaviors. </p>
        </div>
        <ul className="project-details">
          <li>Assisted in researching for the experience.
          </li>
          <li>Created all 3D assets and room designs in Blender</li>
          <li>Created all lighting and textures through out the environment</li>
          <li>Integrated sound effects, background music, and assests into Unity</li>
          <li>Collaborated with the research team to ensure room and assets would convey the theme and research direction</li>
        </ul>
        <div className="stack">
          <p>Tools & Languages: Blender, Unity, Meta Oculus VR goggles</p>
        </div>
        <div className="apps">
            <img src={blenderIcon} alt="Blender Application Logo" className="blender-icon" />
            <img src={unityIcon} alt="Unity Icon" className="unity-icon"/>
            <img src={metaIcon} alt="Meta Icon" className="meta-icon"/>
          {/* <a href="https://www.linkedin.com/" target="_blank"> LinkedIn</a> */}
        </div>

        {/* ------------------ THE CIRCLE ------------------ */}

        <a href="https://github.com/mtn-laurel/Circle" target="_blank" className="project-link">
        The Circle
        <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="project-icon" />
        </a>
        <div className="project-description">
          <p>Description:</p>
          <p>A four person group project for our Human-Computer Interaction course where designed a social media application that mimics another popular application, but the target demographic is older adults.</p>
        </div>
        <ul className="project-details">
          <li>Managed the group project, dividing tasks and facilitating meetings
          </li>
          <li>Conducted user studies to understand the barriers and pain points older adults face when navigating social media applications</li>
          <li>Found published literature specifically outlining elements and components that were proven to increase usability for older adults using social media applications and used it to inform our design decisions</li>
          <li>Designed the wireframe and implemented it</li>
        </ul>
        <div className="stack">
          <p>Tools & Languages: Jira, GitHub, Figma, JavaScript</p>
        </div>
        <div className="apps">
            <img src={jiraIcon} alt="Jira" className="jira-icon" />
            <FontAwesomeIcon icon={faGithub} className="git-icon"/>
            <img src={figmaIcon} alt="Figma" className="figma-icon"/>
            <img src={javaIcon} alt="JavaScript" className="js-icon"/>
          {/* <a href="https://www.linkedin.com/" target="_blank"> LinkedIn</a> */}
        </div>

        {/* ------------------ LUNAR LANDER LAIKA ------------------ */}
        <a href="https://github.com/mtn-laurel/LLL" target="_blank" className="project-link">
        Lunar Lander Laika
        <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="project-icon" />
        </a>
        <div className="project-description">
          <p>Description:</p>
        </div>
        <ul className="project-details"> 
          <li>Led a 5-member team, facilitating Agile Scrum ceremonies and spring planning</li>
          <li>Implemented UI components and gameplay mechanics in Godot</li>
          <li>Managed Git repository workflow and version control, including pull requests, branch protection, and merges</li>
        </ul>
        <div className="stack">
          <p>Tools & Languages: Jira, GDScript, C#, Godot, GitHub</p>
        </div>
        <div className="apps">
            <img src={jiraIcon} alt="Jira" className="jira-icon" />
            <img src={godotIcon} alt="Godot Engine" className="godot-icon" />
            <img src={cIcon} alt="C#" className="c-icon" />
            <FontAwesomeIcon icon={faGithub} className="git-icon"/>
          {/* <a href="https://www.linkedin.com/" target="_blank"> LinkedIn</a> */}
        </div>


        {/* ------------------ PHISH PATROL ------------------ */}
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
          <p>Tools & Languages: Figma, Svelte, Java (Spring Boot), TypeScript, GithHub </p>
        </div>
        <div className="apps">
            <img src={figmaIcon} alt="figma" className="figma-icon" />
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