import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";

import { IoHome } from "react-icons/io5";
import sharedStyles from "../components/shared.module.css";
import styles from "./Contact.module.css";
import SocialIcons from "../components/SocialIcons";
import SideBar from "../components/SideBar";

function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const myRef = useRef(null);

  useEffect(() => {
    console.log(myRef.current);
    myRef.current.focus();
  }, []);

  function handleForm(e) {
    e.preventDefault();

    if (!email || !message) return;

    emailjs
      .send(
        "service_ilosga9", // Create this in EmailJS dashboard
        "template_bx1lkqo", // Create this in EmailJS dashboard
        {
          reply_to: email,
          message: message,
        },
        "P2vDOOuMWIQU7yndp" // Get this from EmailJS dashboard
      )
      .then(() => {
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        console.error(error);
      });
  }
  return (
    <main>
      <SideBar />
      <div className={sharedStyles.sectionContainer}>
        <div className={sharedStyles.headerContainer}>
          <h1>Get in touch.</h1>
          <p>Interested to collaborate? Feel free to drop me an email.</p>
        </div>
        <div className={styles.contactFormContainer}>
          <form className={styles.contactForm} onSubmit={handleForm}>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              className={styles.inputBox}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              ref={myRef}
            />
            <textarea
              name="message"
              id="message"
              placeholder="Your Message"
              className={`${styles.inputBox} ${styles.bodyInput}`}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <button type="submit" className={styles.contactBtn}>
              Send Email
            </button>
          </form>
        </div>
        <SocialIcons />

        <div className={sharedStyles.footerLink}>
          Read more{" "}
          <Link to="/about" style={{ color: "black" }}>
            about me.
          </Link>
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
