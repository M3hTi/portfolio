import { Link } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import sharedStyles from "../components/shared.module.css";
import styles from "./Contact.module.css";

function Contact() {
  return (
    <main>
      <div className={sharedStyles.sectionContainer}>
        <div className={sharedStyles.headerContainer}>
          <h1>Get in touch.</h1>
          <p>Interested to collaborate? Feel free to drop me an email.</p>
        </div>
        <div className={styles.contactFormContainer}>
          <form className={styles.contactForm}>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              className={styles.inputBox}
            />
            <textarea
              name="message"
              id="message"
              placeholder="Your Message"
              className={`${styles.inputBox} ${styles.bodyInput}`}
            ></textarea>
            <button type="submit" className={styles.contactBtn}>
              Send Email
            </button>
          </form>
        </div>
        <div></div>
        <div className={sharedStyles.footerLink}>
          Read more <Link to="/about">about me.</Link>
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

export default Contact;
