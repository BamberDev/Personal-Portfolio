import clsx from "clsx";
import styles from "./Footer.module.scss";
import { FaLinkedin, FaGithub, FaAt } from "react-icons/fa";
import ScrollToTopButton from "./ScrollToTopButton/ScrollToTopButton";
const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={clsx("container", styles.footerContent)}>
        <div>
          <ul className={styles.footerNavbar}>
            <li>
              <a href="#about">ABOUT</a>
            </li>
            <li>
              <a href="#about">PROJECTS</a>
            </li>
          </ul>
        </div>
        <hr />
        <div className={styles.footerLinks}>
          <div>
            <h3>CONTACT ME</h3>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <FaAt />
            </a>
          </div>
          <div>
            <h3>SOCIALS</h3>
            <a
              href="https://github.com/BamberDev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/kevin-cie%C5%9Blik-67b393282/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
        <p className={styles.copyright}>
          &copy; COPYRIGHT {new Date().getFullYear()} | Made by Kevin Cieślik
        </p>
      </div>
      <ScrollToTopButton />
    </footer>
  );
};

export default Footer;
