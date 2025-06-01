import React, { useEffect, useRef } from "react";
import styles from "./Banner.module.css";
import logo from "./Image (3).png";
import { gsap } from "gsap";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
gsap.registerPlugin(ScrambleTextPlugin);

const Banner = () => {
  const line1Ref = useRef();
  const line2Ref = useRef();
  const logoRef = useRef();

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "none" } });

    tl.to(line1Ref.current, {
      scrambleText: {
        text: "I'm Lokesh Sattimsetti, a  Front-End Developer",
        chars: "POWER STAR",
        speed: 0.4,
      },
      duration: 2,
    }).to(line2Ref.current, {
      scrambleText: {
        text: "I'm a creative developer who brings clean code and captivating interfaces together.",
        chars: "PAWAN KALYAN",
        speed: 0.5,
      },
      duration: 2,
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
