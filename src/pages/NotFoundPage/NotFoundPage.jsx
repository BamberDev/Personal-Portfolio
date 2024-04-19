import clsx from "clsx";
import styles from "./NotFoundPage.module.scss";
import { Link } from "react-router-dom";
import { FaArrowRotateLeft } from "react-icons/fa6";

const NotFoundPage = () => {
  return (
    <div className={clsx("container", styles.notFoundPageContainer)}>
      <h1>SEEMS LIKE YOU GOT LOST :(</h1>
      <h2>404 | Page not found.</h2>
      <Link
        to="/"
        className={styles.homeButton}
        aria-label="Go back home button"
      >
        <span>GO BACK HOME</span>
        <i></i>
        <FaArrowRotateLeft />
      </Link>
    </div>
  );
};

export default NotFoundPage;
