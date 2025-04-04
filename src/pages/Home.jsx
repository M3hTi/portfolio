import { Link } from "react-router-dom";
import styles from "./Home.module.css";

function Home() {
  return (
    <main>
      <div className={styles.homeContainer}>
        <div className={styles.headerText}>
          <h1>Welcome to my portfolio!</h1>
          <p>
            This is Mehdi Khademi, a <u>Front-End Developer.</u>
          </p>
        </div>
        <div className={styles.headerBtns}>
          <Link to="">Know more about me</Link>
          <Link to="">Contact with me</Link>
        </div>
        <div></div>
      </div>
    </main>
  );
}

export default Home;
