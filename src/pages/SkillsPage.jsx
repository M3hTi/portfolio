import { IoHome } from "react-icons/io5";
import { Link } from "react-router-dom";
import Snowfall from "react-snowfall";

import Footer from "../components/Footer";
import OpacityContainer from "../components/OpacityContainer";
import sharedStyles from "../components/shared.module.css";
import SideBar from "../components/SideBar";
import Skills from "../components/Skills";
import Button from "../ui/Button";
import { isWinter } from "../utils/helpers";
import styles from "./SkillsPage.module.css";

function SkillsPage() {
  return (
    <div>
      <div>
        <SideBar />
      </div>
      <OpacityContainer>
        {isWinter() && <Snowfall color="#82C3D9" snowflakeCount={200} />}
        <div className={sharedStyles.sectionContainer}>
          <div className={sharedStyles.headerContainer}>
            <h1>My Skills.</h1>
            <p>
              Passionate about new technologies, I keep exploring stuff. Here's
              the tech stack I've worked with!
            </p>
          </div>

          <Skills />

          <Footer>Get in touch</Footer>
          <div className={styles["skills-vector-frame"]}>
            <img
              src="/skills_vector.1fb5f4a4.png"
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
