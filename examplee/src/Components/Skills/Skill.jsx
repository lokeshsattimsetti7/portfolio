import React from "react";
import styles from "./Skill.module.css";
import html from "./html.png";
import css from "./css.png";
import js from "./js.png";
import react from "./React.png";
// import gsap from "./Gsap.png";
import python from "./Python.png";

const Skill = () => {
  return (
    <div className={styles.MainSection}>
      <div className={styles.TopSection}>
        <h1>Skills</h1>
        <p> Technologies I’ve been working with recently</p>
      </div>
      <div className={styles.BottomSection}>
        <h1>Frontend</h1>
        <div className={styles.SkillsSection}>
          <ul>
            <li>
              <img src={html} alt="frontend" />
              HTML
            </li>
            <li>
              <img src={css} alt="frontend" />
              CSS
            </li>
            <li>
              <img src={js} alt="frontend" />
              JS
            </li>
            <li>
              {" "}
              <img src={react} alt="frontend" />
              REACT
            </li>
            {/* <li>
              {" "}
              <img src={gsap} alt="frontend" />
              GSAP
            </li> */}
          </ul>
        </div>
        <h1>languages</h1>
        <div className={styles.SkillsSection}>
          <ul>
            <li>
              <img src={python} alt="frontend" />
              PYTHON
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skill;
