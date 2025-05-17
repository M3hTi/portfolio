import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import { BiHandicap } from "react-icons/bi";
import { IoHome } from "react-icons/io5";
import { Link } from "react-router-dom";

import Error from "../components/Error";
import Footer from "../components/Footer";
import OpacityContainer from "../components/OpacityContainer";
import sharedStyles from "../components/shared.module.css";
import SideBar from "../components/SideBar";
import SocialIcons from "../components/SocialIcons";
import Button from "../ui/Button";
import styles from "./Contact.module.css";

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
      <OpacityContainer>
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

          <Footer>about me</Footer>
          <div className={sharedStyles.vectorFrame}>
            <img src="/vector.png" alt="" />
          </div>
        </div>
        <Button to="/" className={`go-home-Btn ${sharedStyles.homeBg}`}>
          <IoHome className="homeIcon" />
        </Button>
      </OpacityContainer>
    </main>
  );
}

export default Contact;
