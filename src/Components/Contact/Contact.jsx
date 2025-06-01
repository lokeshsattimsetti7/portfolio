import React from "react";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <div className={styles.MainSection}>
      <form
        action="https://getform.io/f/amdmmmvb"
        method="POST"
        className={styles.formStyle}
      >
        <h2>Contact</h2>

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className={styles.inputStyle}
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className={styles.inputStyle}
        />

        <input
          type="text"
          name="title"
          placeholder="Subject / Title"
          required
          className={styles.inputStyle}
        />

        <textarea
          name="message"
          placeholder="Your Message"
          required
          rows={5}
          className={styles.inputStyle2}
        />

        <button type="submit" className={styles.glow}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
