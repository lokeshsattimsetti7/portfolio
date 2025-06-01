import React from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.MainSection}>
      <div className={styles.hanging}>
        <a
          href="https://github.com/lokeshsattimsetti7"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-github"></i>
        </a>
        <a
          href="http://www.linkedin.com/in/lokesh-sattimsetti-808a74268"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>
      </div>

      <ul>
        <li>
          <a href="#home">home</a>
        </li>
        <li>
          <a href="#works">works</a>
        </li>
        <li>
          <a href="#about-me">about-me</a>
        </li>
        <li>
          <a href="#contacts">contacts</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
