import React from "react";
import styles from "./Project.module.css";
import One from "./E.png";
import Two from "./spotify.png";
import Three from "./blog.png";
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
              href="https://exclusive-6si1og1w6-lokeshsattimsetti7s-projects.vercel.app/"
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
      <div className={styles.Block}>
        <div className={styles.LeftSide}>
          <h1> Spotify-Frontend</h1>

          <p1>
            This project is a modern, responsive web application that replicates
            the user interface of the Spotify music platform. Built using React
            JS and Tailwind CSS, it showcases a sleek, interactive design that
            mirrors the core visual elements of Spotify, offering users an
            immersive UI experience. While the application focuses solely on the
            frontend, it effectively demonstrates the layout and design
            principles of a high-quality music streaming service.
          </p1>
          <div className={styles.Button}>
            {" "}
            <a
              href=" https://spotify-clone-git-main-lokeshsattimsetti7s-projects.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className={styles.glow}>Website link</button>
            </a>
            <a
              href="https://github.com/lokeshsattimsetti7/SpotifyClone.git"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className={styles.glow}>Github</button>
            </a>
          </div>
        </div>

        <div className={styles.RightSide}>
          <img src={Two} alt="one" />
        </div>
      </div>
      <div className={styles.Block}>
        <div className={styles.LeftSide}>
          <h1> Blogy-Website</h1>

          <p1>
            Blogy is a fully responsive blog website, Responsive for all
            devices, build using HTML, CSS, and JavaScript.
          </p1>
          <div className={styles.Button}>
            {" "}
            <a
              href="http://127.0.0.1:5501/blogy-master/index.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className={styles.glow}>Website link</button>
            </a>
            <a
              href="https://github.com/lokeshsattimsetti7/Blog.git"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className={styles.glow}>Github</button>
            </a>
          </div>
        </div>

        <div className={styles.RightSide}>
          <img src={Three} alt="one" />
        </div>
      </div>
    </div>
  );
};

export default Project;
