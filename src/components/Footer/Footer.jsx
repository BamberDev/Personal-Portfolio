import clsx from "clsx";
import styles from "./Footer.module.scss";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import ScrollToTopButton from "./ScrollToTopButton/ScrollToTopButton";
import logo from "./../../assets/KC-logo.png";
const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={clsx("container", styles.footerContent)}>
        <div>
          <ul className={styles.footerNavbar}>
            <li>
              <a href="#about">HOME</a>
            </li>
            <li>
              <a href="#about">ABOUT</a>
            </li>
            <li>
              <a href="#about">PROJECTS</a>
            </li>
          </ul>
          <hr />
        </div>
        <div className={styles.footerLinks}>
          <div>
            <a href="/">
              <img src={logo} alt="Logo" />
            </a>
          </div>
          <div>
            <ul className={styles.socials}>
              <li>
                <a
                  href="https://github.com/BamberDev"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                  Github
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/kevin-cie%C5%9Blik-67b393282/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin />
                  Linkedin
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className={styles.copyright}>
          Copyright &copy; {new Date().getFullYear()} | Kevin Cieślik
        </p>
      </div>
      <ScrollToTopButton />
    </footer>
  );
};

export default Footer;
