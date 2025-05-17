import { FaCss3, FaHtml5, FaReact } from "react-icons/fa";
import { SiJavascript, SiReactquery, SiRedux } from "react-icons/si";

import styles from "./Skill.module.css";

function Skill({ skillObj }) {
  const { icon, name } = skillObj;
  return (
    <div className={styles.skill}>
      <div style={{ fontSize: "120px", marginBottom: "15px" }}>{icon}</div>
      <p>{name}</p>
    </div>
  );
}

export default Skill;
