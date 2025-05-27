import { useQuery } from "@tanstack/react-query";
import { IoHome } from "react-icons/io5";
import { Link } from "react-router-dom";

import sharedStyles from "../components/shared.module.css";
import { getProjects } from "../services/apiProjects";
import Button from "../ui/Button";
import Footer from "./Footer";
import OpacityContainer from "./OpacityContainer";
import Project from "./Project";
import styles from "./Projects.module.css";
import SideBar from "./SideBar";
import Spinner from "../ui/Spinner";

function Projects() {
  const { isLoading, data: projects } = useQuery({
    queryKey: ["projects"],
    queryFn: getProjects,
  });
  return (
    <main>
      <SideBar />
      <OpacityContainer>
        <div className={styles.sectionContainer}>
          <div className={sharedStyles.headerContainer}>
            <h1 className={styles.projectsHeader}>My Projects</h1>
            <p style={{ paddingBlock: "24px" }}>
              Here are a few cool things I've worked on, do check them out!
            </p>
          </div>
          <div style={{ width: "100%" }}>
            {isLoading && (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  minHeight: "300px",
                }}
              >
                <Spinner />
              </div>
            )}
            {!isLoading && projects?.length === 0 && (
              <div
                style={{
                  textAlign: "center",
                  padding: "50px 0",
                  color: "#7d7987",
                  fontSize: "1.2rem",
                }}
              >
                No projects found. Check back later!
              </div>
            )}
            {!isLoading && projects?.length > 0 && (
              <div className={styles["project-cards-container"]}>
                {projects.map((project) => (
                  <Project key={project.id} projectObj={project} />
                ))}
              </div>
            )}
          </div>
          <Footer>skills</Footer>
        </div>
        <Button to="/" className={`go-home-Btn ${sharedStyles.homeBg}`}>
          <IoHome className="homeIcon" />
        </Button>
      </OpacityContainer>
    </main>
  );
}

export default Projects;
