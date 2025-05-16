import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import styles from "./Project.module.css";

function Project({ projectObj }) {
  const {
    name,
    description,
    isDeploy,
    isCreatedWithReact,
    image,
    githubUrl,
    deployUrl,
  } = projectObj;

  return (
    <div className={styles["project-card"]}>
      <div className={styles["image-container"]}>
        <a
          href={deployUrl ? deployUrl : githubUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={image} alt={name} className={styles["project-image"]} />
        </a>
      </div>
      <div className={styles["project-details-container"]}>
        <h2 className={styles["project-heading"]}>{name}</h2>
        <p className={styles["project-details"]}>{description}</p>

        <div style={{ display: "flex", gap: "12px" }}>
          {githubUrl && (
            <a
              href={githubUrl}
              className={styles["project-live-link"]}
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub Repository"
            >
              <FaGithub style={{ marginRight: "8px" }} /> GitHub
            </a>
          )}

          {isDeploy && deployUrl && (
            <a
              href={deployUrl}
              className={styles["project-live-link"]}
              target="_blank"
              rel="noopener noreferrer"
              title="Live Demo"
            >
              <FiExternalLink style={{ marginRight: "8px" }} /> Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default Project;
