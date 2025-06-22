import React from "react";
import styles from "./Project.module.css";
import One from "./E.png";
import Two from "./spotify.png";
import Three from "./blog.png";
import Four from "./SkinCare.png";
const Project = () => {
  return (
    <div className={styles.MainSection}>
      <h1>Projects</h1>
      <p>Things I’ve built so far</p>

      <div className={styles.belowSection}>
        <div className={styles.Block}>
          <img src={One} alt="one" />
          <h1>E-Commerce Site</h1>
          <p1>Developed using React frontend</p1>
          <div className={styles.buttons}>
            <a
              href="https://e-commerce-website-vpod-lokeshsattimsetti7s-projects.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className={styles.glow}>Website link</button>
            </a>
            <a
              href="https://github.com/lokeshsattimsetti7/E-CommerceWebsite.git"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className={styles.glow}>Github</button>
            </a>
          </div>
        </div>

        <div className={styles.Block}>
          <img src={Two} alt="one" />
          <h1> Spotify-Frontend</h1>
          <p1>Developed using React frontend</p1>
          <div className={styles.buttons}>
            <a
              href="https://spotify-clone-q7o1-lokeshsattimsetti7s-projects.vercel.app/"
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
        <div className={styles.Block}>
          <img src={Three} alt="one" />
          <h1> Blogy-Website</h1>

          <p1>Developed using Html and Css & Js</p1>
          <div className={styles.buttons}>
            <a
              href="https://blog-y7xx-git-main-lokeshsattimsetti7s-projects.vercel.app/"
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
        <div className={styles.Block}>
          <img src={Four} alt="one" />
          <h1>Skin Care</h1>

          <p1>Developed using React Js & Gsap</p1>
          <div className={styles.buttons}>
            <a
              href="https://six-nine-git-main-lokeshsattimsetti7s-projects.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className={styles.glow}>Website link</button>
            </a>
            <a
              href="https://github.com/lokeshsattimsetti7/SixNine.git"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className={styles.glow}>Github</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
