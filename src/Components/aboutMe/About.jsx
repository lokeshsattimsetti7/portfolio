import React from "react";
import styles from "./About.module.css";
import logo from "./Group 50.png";

const About = () => {
  return (
    <div className={styles.MainSection}>
      <div className={styles.TopSection}>
        <h1>About Me</h1>
      </div>
      <div className={styles.BottomSection}>
        <div className={styles.LeftSection}>
          <p>Hello, I’m Lokesh Sattimsetti!</p>
          <p>
            I’m a self-taught front-end developer based in Hyderbad,India. I can
            develop responsive websites from scratch and transform them into
            modern, user-friendly web experiences.
          </p>
          <p>
            Turning my creativity and knowledge into websites has been my
            passion for over a year. I’ve helped various clients establish a
            strong presence online. I constantly strive to stay updated with the
            latest technologies and frameworks.
          </p>
        </div>
        <div className={styles.RightSection}>
          <img src={logo} alt="my logo" />
        </div>
      </div>
    </div>
  );
};

export default About;
