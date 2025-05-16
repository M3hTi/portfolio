import styles from "./About.module.css";
import sharedStyles from "../components/shared.module.css";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { IoHome } from "react-icons/io5";
import { Link } from "react-router-dom";
import SideBar from "../components/SideBar";
import Button from "../ui/Button";

function About() {
  return (
    <main>
      <SideBar />
      <div className={sharedStyles.sectionContainer}>
        <div className={sharedStyles.headerContainer}>
          <h1>About Me</h1>
          <p>Front-End Developer | Gamer</p>
        </div>
        <div className={styles.imgContainer}>
          <img src="/user.jpg" />
        </div>
        <div className={styles.aboutMain}>
          <div className={styles.aboutMainLeft}>
            <h3 className={styles.aboutSubHeading}>Developer</h3>
            <p className={styles.aboutSubHeadingDetails}>
             I'm a motivated junior front-end developer with a strong foundation in HTML, CSS, and JavaScript, and hands-on experience building dynamic user interfaces with React. I’m well-versed in core programming concepts such as object-oriented programming (OOP), asynchronous operations (Promises, AJAX), and API integration. I have a deep passion for clean, efficient code and a commitment to continuous learning. A recent graduate of Azad University (South Tehran Branch), I’m currently focused on advancing my skills in modern front-end technologies and best practices to create responsive, user-friendly web applications.
            </p>
          </div>
          <div className={styles.aboutMainRight}>
            <DotLottieReact
              src="https://lottie.host/b0464e3f-2d1f-461e-9d99-7ac556768935/K7PLL0mnzc.lottie"
              loop
              autoplay
            />
          </div>
        </div>
        <div className={sharedStyles.footerLink}>
          Check out my{" "}
          <a
            href="https://github.com/M3hTi"
            target="_blank"
            className="clear-links"
          >
            projects
          </a>
        </div>
        <div className={sharedStyles.vectorFrame}>
          <img src="/vector.png" alt="" />
        </div>
      </div>
      <Button to="/" className={`go-home-Btn ${sharedStyles.homeBg}`}>
        <IoHome className="homeIcon" />  
      </Button>
    </main>
  );
}

export default About;
