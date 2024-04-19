import clsx from "clsx";
import styles from "./Footer.module.scss";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import logo from "./../../assets/Logo_KC_Lato.svg";
import { Link, useLocation } from "react-router-dom";
import { nanoid } from "nanoid";
import { navbarOptions } from "../../data/navbarOptions";
import MagneticHover from "../../animations/MagneticHover/MagneticHover";
const Footer = () => {
  const location = useLocation();

  const filteredNavbarOptions = navbarOptions.filter((option) => {
    switch (location.pathname) {
      case "/":
        return option.showOnHome;
      case "/projects":
        return option.showOnProjects;
      case "/contact":
        return option.showOnContact;
    }
  });

  const handleNavbarItemClick = () => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 1000);
  };

  const handleSmoothScroll = (e, id) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className={styles.footerContainer}>
      <div className={clsx("container", styles.footerContent)}>
        <div>
          <ul className={styles.footerNavbar}>
            {filteredNavbarOptions.map((option) => (
              <li key={nanoid()}>
                {option.isScroll ? (
                  <a
                    className={styles.navbarItem}
                    onClick={(e) => handleSmoothScroll(e, option.path)}
                    href={option.path}
                    aria-label="Navbar item"
                  >
                    {option.name}
                  </a>
                ) : (
                  <Link
                    className={styles.navbarItem}
                    onClick={handleNavbarItemClick}
                    to={option.path}
                    aria-label="Navbar item"
                  >
                    {option.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
          <hr />
        </div>
        <div className={styles.footerLinks}>
          <div>
            <a href="/" aria-label="Logo with a link to my website">
              <MagneticHover>
                <img src={logo} alt="My own logo - KC" />
              </MagneticHover>
            </a>
          </div>
          <div>
            <ul className={styles.socials}>
              <li>
                <a
                  href="https://github.com/BamberDev"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Github link"
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
                  aria-label="Linkedin link"
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
    </footer>
  );
};

export default Footer;
