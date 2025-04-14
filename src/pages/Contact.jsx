import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";

import { IoHome } from "react-icons/io5";
import sharedStyles from "../components/shared.module.css";
import styles from "./Contact.module.css";
import SocialIcons from "../components/SocialIcons";
import SideBar from "../components/SideBar";
import { useForm } from "react-hook-form";
import Error from "../components/Error";
import { BiHandicap } from "react-icons/bi";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  function handleForm(data) {
    console.log(data);
    const { email, message } = data;

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          reply_to: email,
          message: message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        reset();
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
          <form
            className={styles.contactForm}
            onSubmit={handleSubmit(handleForm)}
          >
            <input
              {...register("email", {
                required: true,
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Please enter a valid email address",
                },
              })}
              name="email"
              id="email"
              placeholder="Enter your email"
              className={styles.inputBox}
            />
            {errors.email && (
              <Error className="error">
                {errors.email.message || "Email Required"}
              </Error>
            )}
            <textarea
              {...register("message", {
                required: true,
                minLength: 10,
              })}
              id="message"
              placeholder="Your Message"
              className={`${styles.inputBox} ${styles.bodyInput}`}
            ></textarea>
            {errors.message && (
              <Error className="error">
                Your Message must contain at least 10 characters.
              </Error>
            )}
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
          <img src="/vector.png" alt="" />
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
