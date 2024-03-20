import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styles from "./ContactForm.module.scss";

const ContactForm = () => {
  const form = useRef();
  const [alertMessage, setAlertMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);

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
    <section>
      <div className={styles.contactContainer}>
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
            <div>
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
            <div>
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
            <label htmlFor="message">Enter your message</label>
            <textarea
              id="message"
              placeholder="Message"
              name="message"
              rows="5"
              aria-required="true"
              required
            />
            <input className={styles.submitButton} type="submit" value="Send" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
