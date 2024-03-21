import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { IoClose, IoMenu } from "react-icons/io5";
import { nanoid } from "nanoid";
import { navOptions } from "../../data/navOptions";
import logo from "../../assets/KC-logo.png";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const [visible, setVisible] = useState(true);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenuOnMobile = () => {
    if (window.innerWidth <= 1024) {
      setShowMenu(false);
    }
  };

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

  return (
    <nav className={clsx(styles.navbarContainer, !visible && styles.hidden)}>
      <div className={clsx("container", styles.navbarContent)}>
        <div>
          <Link to="/">
            <img src={logo} alt="My own logo - KC" />
          </Link>
        </div>
        <div className={clsx(styles.menu, showMenu && styles.showMenu)}>
          <ul className={styles.navbarLinks}>
            {navOptions.map((option) => (
              <li key={nanoid()}>
                {option.isScroll ? (
                  <a
                    className={styles.navbarItem}
                    onClick={closeMenuOnMobile}
                    href={option.path}
                  >
                    {option.name}
                  </a>
                ) : (
                  <Link
                    className={styles.navbarItem}
                    onClick={closeMenuOnMobile}
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
