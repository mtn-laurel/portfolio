import "./Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer id="contact" className="contact-section">
      <p>Connect with me:</p>
      <div className="links">
        <a href="mailto:emerylaurel@aol.com">
          <FontAwesomeIcon icon={faEnvelope} /> Email
        </a>
        <span className="divider"></span>
        <a href="https://github.com/mtn-laurel" target="_blank">
          <FontAwesomeIcon icon={faGithub} /> Github
        </a>
      </div>
    </footer>
  );
}