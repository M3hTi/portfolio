import { IoHome } from "react-icons/io5";
import { Link } from "react-router-dom";

import OpacityContainer from "../components/OpacityContainer";
import sharedStyles from "../components/shared.module.css";
import SideBar from "../components/SideBar";
import Skills from "../components/Skills";
import Button from "../ui/Button";
import styles from "./SkillsPage.module.css";

function SkillsPage() {
  return (
    <div>
      <div>
        <SideBar />
      </div>
      <OpacityContainer>
        <div className={sharedStyles.sectionContainer}>
          <div className={sharedStyles.headerContainer}>
            <h1>My Skills.</h1>
            <p>
              Passionate about new technologies, I keep exploring stuff. Here's
              the tech stack I've worked with!
            </p>
          </div>

          <Skills />

          <div className={sharedStyles.footerLink}>
            Check out{" "}
            <Link to="/contact" className="clear-links">
              Get in touch
            </Link>
          </div>
          <div className={styles["skills-vector-frame"]}>
            <img
              src="../../public/skills_vector.1fb5f4a4.png"
              className={styles["skills-vector"]}
            />
          </div>
        </div>

        <Button to="/" className={`go-home-Btn ${sharedStyles.homeBg}`}>
          <IoHome className="homeIcon" />
        </Button>
      </OpacityContainer>
    </div>
  );
}

export default SkillsPage;
