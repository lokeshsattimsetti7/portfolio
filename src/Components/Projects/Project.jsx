import React from "react";
import styles from "./Project.module.css";
import One from "./E.png";

const Project = () => {
  return (
    <div className={styles.MainSection}>
      <h1>Projects</h1>
      <p>Things I’ve built so far</p>
      <div className={styles.Block}>
        <div className={styles.LeftSide}>
          <h1>E-Commerce Site</h1>

          <p1>
            This project is a modern, fully functional e-commerce website
            developed using React JS, designed to offer users a seamless online
            shopping experience. The platform includes key features typically
            found in professional online stores, allowing customers to browse,
            search, and purchase products with ease.
          </p1>
          <div className={styles.Button}>
            {" "}
            <a
              href=" https://exclusive-website-lokeshsattimsetti7s-projects.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className={styles.glow}>Website link</button>
            </a>
            <a
              href="https://github.com/lokeshsattimsetti7/ExclusiveWebsite.git"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className={styles.glow}>Github</button>
            </a>
          </div>
        </div>

        <div className={styles.RightSide}>
          <img src={One} alt="one" />
        </div>
      </div>
    </div>
  );
};

export default Project;
