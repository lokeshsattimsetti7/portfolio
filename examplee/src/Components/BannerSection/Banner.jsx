import React, { useEffect, useRef } from "react";
import styles from "./Banner.module.css";
import logo from "./Image (3).png";
import { gsap } from "gsap";
// import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

const Banner = () => {
  const line1Ref = useRef();
  const line2Ref = useRef();
  const logoRef = useRef();

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power1.inOut" } });

    tl.to(line1Ref.current, {
      text: "I'm Lokesh Sattimsetti, a Front-End Developer",
      duration: 2,
    }).to(line2Ref.current, {
      text: "I'm a creative developer who brings clean code and captivating interfaces together.",
      duration: 3,
    });

    gsap.to(logoRef.current, {
      y: -10,
      repeat: -1,
      yoyo: true,
      duration: 2.5,
      ease: "power1.inOut",
    });

    window.onclick = () => tl.play(0);
  }, []);

  return (
    <div className={styles.MainSection}>
      <div className={styles.LeftSide}>
        <h1 className={styles.gradient} ref={line1Ref}>
          {" "}
        </h1>
        <p ref={line2Ref}></p>
        <button className={styles.glow}>Resume</button>
      </div>

      <div className={styles.RightSide}>
        <img ref={logoRef} className={styles.logo} src={logo} alt="logo" />
      </div>
    </div>
  );
};

export default Banner;

