import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";
import styles from "./ContactForm.module.scss";
import { motion } from "framer-motion";

const ContactForm = () => {
  const form = useRef();
  const [alertMessage, setAlertMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [recaptchaValue, setRecaptchaValue] = useState(null);

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!recaptchaValue) {
      setAlertMessage("Please solve the reCAPTCHA first.");
      setTimeout(() => {
        setAlertMessage(null);
      }, 3000);
      setLoading(false);
      return;
    }

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_PUBLIC_KEY,
        }
      );

      setAlertMessage("Email sent successfully!");
      setTimeout(() => {
        setAlertMessage(null);
      }, 3000);
      setLoading(false);
      e.target.reset();
    } catch (error) {
      setAlertMessage("Failed to send email. Please try again later.");
      setTimeout(() => {
        setAlertMessage(null);
      }, 5000);
      setLoading(false);
    }
  };

  return (
    <section className="container">
      <motion.div
        initial={{ opacity: 0, y: 150 }}
        animate={{ opacity: 1, y: 0, scale: [0.6, 1.2, 1] }}
        transition={{
          duration: 1.5,
          delay: 0.5,
          type: "spring",
          stiffness: 100,
        }}
        className={styles.contactContainer}
      >
        <div className={styles.contactInfo}>
          {alertMessage && <p className={styles.alert}>{alertMessage}</p>}
          {loading && <p className={styles.loader}>Sending...</p>}
          <h1>Contact</h1>
          <p>
            Feel free to get in touch using the form below or email me directly
            at{" "}
            <a href="mailto:kabaczek99@gmail.com" target="_blank">
              kabaczek99@gmail.com
            </a>
          </p>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <div className={styles.inputContainer}>
            <div className={styles.nameInput}>
              <label htmlFor="userName">Enter your Name</label>
              <input
                id="userName"
                type="text"
                placeholder="Name"
                name="userName"
                aria-required="true"
                required
              />
            </div>
            <div className={styles.emailInput}>
              <label htmlFor="userEmail">Enter your Email</label>
              <input
                id="userEmail"
                type="email"
                placeholder="Email"
                name="userEmail"
                aria-required="true"
                required
              />
            </div>
          </div>
          <div>
            <div className={styles.messageInput}>
              <label htmlFor="message">Enter your message</label>
              <textarea
                id="message"
                placeholder="Message"
                name="message"
                rows="5"
                aria-required="true"
                required
              />
              <button className={styles.submitButton} type="submit">
                <span>SEND</span>
                <i></i>
              </button>
            </div>
            <ReCAPTCHA
              className={styles.recaptcha}
              theme="dark"
              sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
              onChange={(value) => setRecaptchaValue(value)}
            />
            <p>
              I value any feedback and suggestions for improvement. Feel free to
              share any thoughts or ideas you have regarding my website.
            </p>
          </div>
        </form>
      </motion.div>
    </section>
  );
};

export default ContactForm;
