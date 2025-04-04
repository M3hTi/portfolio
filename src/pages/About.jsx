import styles from "./About.module.css";
import sharedStyles from "../components/shared.module.css";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { IoHome } from "react-icons/io5";
import { Link } from "react-router-dom";

function About() {
  return (
    <main>
      <div className={sharedStyles.sectionContainer}>
        <div className={sharedStyles.headerContainer}>
          <h1>About Me</h1>
          <p>Front-End Developer | Gamer</p>
        </div>
        <div className={styles.imgContainer}>
          <img src="../../public/user.jpg" alt="" />
        </div>
        <div className={styles.aboutMain}>
          <div className={styles.aboutMainLeft}>
            <h3 className={styles.aboutSubHeading}>Developer</h3>
            <p className={styles.aboutSubHeadingDetails}>
              A junior front-end developer who loves coding and learning, always
              tries to keep up with advancing technologies, and is a graduate of
              Azad University, South Tehran branch.
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
          <img src="../../public/vector.png" alt="" />
        </div>
      </div>
      <button className={`go-home-Btn ${sharedStyles.homeBg}`}>
        <Link to="/">
          <IoHome className="homeIcon" />
        </Link>
      </button>
    </main>
  );
}

export default About;
