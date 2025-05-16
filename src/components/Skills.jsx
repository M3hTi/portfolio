import { FaCss3, FaHtml5, FaReact } from "react-icons/fa";
import { SiJavascript, SiReactquery, SiRedux } from "react-icons/si";

import styles from "./Skills.module.css";
function Skills() {
  return (
    <div className={styles["skill-cards-container"]}>
      <div className={styles.skill}>
        <FaHtml5 style={{ fontSize: "120px", marginBottom: "15px" }} />
        <p>HTML</p>
      </div>
      <div className={styles.skill}>
        <FaCss3 style={{ fontSize: "120px", marginBottom: "15px" }} />
        <p>CSS</p>
      </div>
      <div className={styles.skill}>
        <SiJavascript style={{ fontSize: "120px", marginBottom: "15px" }} />
        <p>JavaScript</p>
      </div>
      <div className={styles.skill}>
        <FaReact style={{ fontSize: "120px", marginBottom: "15px" }} />
        <p>React</p>
      </div>
      <div className={styles.skill}>
        <SiRedux style={{ fontSize: "120px", marginBottom: "15px" }} />
        <p>Redux</p>
      </div>
      <div className={styles.skill}>
        <SiReactquery style={{ fontSize: "120px", marginBottom: "15px" }} />
        <p>React Query</p>
      </div>
    </div>
  );
}

export default Skills;
