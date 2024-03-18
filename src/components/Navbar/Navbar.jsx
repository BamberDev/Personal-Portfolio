import clsx from "clsx";
import styles from "./Navbar.module.scss";
import { IoClose, IoMenu } from "react-icons/io5";
import { navOptions } from "../../data/navOptions";
import logo from "./../../assets/KC-logo.png";
import { nanoid } from "nanoid";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenuOnMobile = () => {
    if (window.innerWidth <= 1024) {
      setShowMenu(false);
    }
  };

  return (
    <nav className={styles.navbarContainer}>
      <div className={clsx("container", styles.navbarContent)}>
        <a href="/">
          <img src={logo} alt="My own logo - KC" />
        </a>
        <div className={clsx(styles.menu, showMenu && styles.showMenu)}>
          <ul className={styles.navbarLinks}>
            {navOptions.map((option) => (
              <li key={nanoid()}>
                {option.isScroll && (
                  <a
                    className={styles.navbarItem}
                    onClick={closeMenuOnMobile}
                    href={option.path}
                  >
                    {option.name}
                  </a>
                )}
                {!option.isScroll && (
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
