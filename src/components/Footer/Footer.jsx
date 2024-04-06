import clsx from "clsx";
import styles from "./Footer.module.scss";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import logo from "./../../assets/KC-logo.png";
import { Link, useLocation } from "react-router-dom";
import { nanoid } from "nanoid";
import { navbarOptions } from "../../data/navbarOptions";
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
    }, 500);
  };

  return (
    <footer className={styles.footerContainer}>
      <div className={clsx("container", styles.footerContent)}>
        <div>
          <ul className={styles.footerNavbar}>
            {filteredNavbarOptions.map((option) => (
              <li key={nanoid()}>
                {option.isScroll ? (
                  <a className={styles.navbarItem} href={option.path}>
                    {option.name}
                  </a>
                ) : (
                  <Link
                    className={styles.navbarItem}
                    onClick={handleNavbarItemClick}
                    to={option.path}
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
            <Link to="/">
              <img src={logo} alt="Logo" />
            </Link>
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
    </footer>
  );
};

export default Footer;
