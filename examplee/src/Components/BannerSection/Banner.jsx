import React, { useEffect, useRef } from "react";
import styles from "./Banner.module.css";
import logo from "./Image (3).png";
import { gsap } from "gsap";

const Banner = () => {
  const line1Ref = useRef();
  const line2Ref = useRef();
  const logoRef = useRef();

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { ease: "power1.inOut", duration: 1 },
    });

    tl.fromTo(
      line1Ref.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        onStart: () => {
          line1Ref.current.textContent =
            "I'm Lokesh Sattimsetti, a Front-End Developer";
        },
      }
    ).fromTo(
      line2Ref.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        delay: 0.5,
        onStart: () => {
          line2Ref.current.textContent =
            "I'm a creative developer who brings clean code and captivating interfaces together.";
        },
      }
    );

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

