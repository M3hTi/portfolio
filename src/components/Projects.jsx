import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { IoHome } from "react-icons/io5";
import { useSearchParams } from "react-router-dom";

import sharedStyles from "../components/shared.module.css";
import { getProjects } from "../services/apiProjects";
import Button from "../ui/Button";
import Spinner from "../ui/Spinner";
import Footer from "./Footer";
import OpacityContainer from "./OpacityContainer";
import Project from "./Project";
import styles from "./Projects.module.css";
import SideBar from "./SideBar";

function Projects() {
  const [filterBy, setFilterBy] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const { isLoading, data: projects } = useQuery({
    queryKey: ["projects", filterBy],
    queryFn: () => getProjects(filterBy),
  });

  // console.log(projects);

  const technologies =
    projects?.flatMap((project) => project["frame_works"]) || [];

  // console.log(technologies);

  const uniqueTechnologies = new Set([...technologies]);

  // console.log(uniqueTechnologies);

  // console.log(technologies);

  // let filterProjects;

  // switch (filterBy) {
  //   case "":
  //     filterProjects = projects;
  //     break;
  //   case "all":
  //     filterProjects = projects;
  //     break;
  //   default:
  //     filterProjects = projects?.filter((project) =>
  //       project.frame_works.includes(filterBy)
  //     );
  //     break;
  // }

  // console.log(filterProjects)

  function handleFilter(e) {
    setFilterBy(e.target.value);
    searchParams.set("filterBy", e.target.value);
    setSearchParams(searchParams);
  }

  useEffect(() => {
    const filterParams = searchParams.get("filterBy") || "";
    console.log(filterParams);
    setFilterBy(filterParams);
  }, [searchParams]);

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
            <div className={styles.filterSelectContainer}>
              <select
                className={styles.filterSelect}
                value={filterBy}
                onChange={(e) => handleFilter(e)}
              >
                <option value="all">All</option>
                {Array.from(uniqueTechnologies).map((tech, i) => (
                  <option key={i} value={tech}>
                    {tech}
                  </option>
                ))}
              </select>
            </div>
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
