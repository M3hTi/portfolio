import { FaCss3, FaHtml5, FaReact } from "react-icons/fa";
import {
  SiJavascript,
  SiReacthookform,
  SiReactquery,
  SiRedux,
} from "react-icons/si";

import Skill from "./Skill";
import styles from "./Skills.module.css";

const mySkills = [
  { icon: <FaHtml5 />, name: "HTML" },
  { icon: <FaCss3 />, name: "CSS" },
  { icon: <SiJavascript />, name: "JavaScript" },
  { icon: <FaReact />, name: "React" },
  { icon: <SiRedux />, name: "Redux" },
  { icon: <SiReactquery />, name: "React Query" },
  { icon: <SiReacthookform />, name: "React hook form" },
];

function Skills() {
  return (
    <div className={styles["skill-cards-container"]}>
      {Array.from({ length: mySkills.length }, (_, i) => (
        <Skill key={i} skillObj={mySkills.at(i)} />
      ))}
    </div>
  );
}

export default Skills;
