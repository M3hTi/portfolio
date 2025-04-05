import { Link } from "react-router-dom";
import styles from "./Home.module.css";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { IoHome } from "react-icons/io5";
import SideBar from "../components/SideBar";

function Home() {
  return (
    <main>
      <SideBar />
      <div className={styles.homeContainer}>
        <div className={styles.headerText}>
          <h1>Welcome to my portfolio!</h1>
          <p>
            This is Mehdi Khademi, a <u>Front-End Developer.</u>
          </p>
        </div>
        <div className={styles.headerBtns}>
          <Link to="about" className={`${styles.btn} ${styles.btnWhite}`}>
            Know more about me
          </Link>
          <Link
            to="contact"
            className={`${styles.btn} ${styles.btnTransparent}`}
          >
            Contact with me
          </Link>
        </div>
        <div className={styles.splashImage}>
          <DotLottieReact
            src="https://lottie.host/66670b0c-6fcb-4cd5-961f-8c16f88c2ccb/ud1CZKy26J.lottie"
            loop
            autoplay
          />
        </div>
      </div>
      <button className="go-home-Btn">
        <Link>
          <IoHome className="homeIcon" />
        </Link>
      </button>
    </main>
  );
}

export default Home;
