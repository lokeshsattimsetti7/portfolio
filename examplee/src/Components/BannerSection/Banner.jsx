import React from "react";
import styles from "./Banner.module.css";
import logo from "./Image (3).png";

const Banner = () => {
  return (
    <div className={styles.MainSection}>
      <div className={styles.LeftSide}>
        <h1 className={styles.gradient}>
          I'm Lokesh Sattimsetti, a Front-End Developer
        </h1>
        <p>
          I'm a creative developer who brings clean code and captivating
          interfaces together
        </p>
        <button className={styles.glow}>Resume</button>
      </div>

      <div className={styles.RightSide}>
        <img className={styles.logo} src={logo} alt="logo" />
      </div>
    </div>
  );
};

export default Banner;

};

export default Banner;

