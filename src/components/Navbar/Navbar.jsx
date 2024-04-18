import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import clsx from "clsx";
import { IoClose, IoMenu } from "react-icons/io5";
import { nanoid } from "nanoid";
import { navbarOptions } from "../../data/navbarOptions";
import logo from "../../assets/Logo_KC_Lato.svg";
import styles from "./Navbar.module.scss";
import MagneticHover from "../../animations/MagneticHover/MagneticHover";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const [visible, setVisible] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const body = document.querySelector("body");
    body.style.overflow = showMenu ? "hidden" : "auto";
  }, [showMenu]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const visible = prevScrollPos > currentScrollPos;
      setPrevScrollPos(currentScrollPos);
      setVisible(visible);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenuOnMobile = () => {
    if (window.innerWidth <= 1024) {
      setShowMenu(false);
    }
  };

  const handleNavbarItemClick = () => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 1000);
  };

  const filteredNavbarOptions = navbarOptions.filter((option) => {
    switch (location.pathname) {
      case "/":
        return option.showOnHome;
      case "/contact":
        return option.showOnContact;
    }
  });

  const handleSmoothScroll = (e, id) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className={clsx(styles.navbarContainer, !visible && styles.hidden)}>
      <div className={clsx("container", styles.navbarContent)}>
        <div>
          <a href="/">
            <MagneticHover>
              <img src={logo} alt="My own logo - KC" />
            </MagneticHover>
          </a>
        </div>
        <div className={clsx(styles.menu, showMenu && styles.showMenu)}>
          <ul className={styles.navbarLinks}>
            {filteredNavbarOptions.map((option) => (
              <li key={nanoid()}>
                {option.isScroll ? (
                  <a
                    className={styles.navbarItem}
                    onClick={(e) => {
                      closeMenuOnMobile();
                      handleSmoothScroll(e, option.path);
                    }}
                    href={option.path}
                  >
                    {option.name}
                  </a>
                ) : (
                  <Link
                    className={styles.navbarItem}
                    onClick={() => {
                      closeMenuOnMobile();
                      handleNavbarItemClick();
                    }}
                    to={option.path}
                  >
                    {option.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.navbarButton} onClick={toggleMenu}>
          {showMenu ? <IoClose /> : <IoMenu />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
