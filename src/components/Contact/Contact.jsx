import React from "react";

import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact Me</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={`/assets/contact/emailIcon.png`} alt="Email Icon" />
          <a href="mailto:kaziamin1239@gmail.com">Email</a>
        </li>

        <li className={styles.link}>
          <img src={`/assets/contact/linkedinIcon.png`} alt="Linkedin Icon" />
          <a href="https://www.linkedin.com/in/kazi-amin/" target="_blank">Linkedin</a>
        </li>

        <li className={styles.link}>
          <img src={`/assets/contact/githubIcon.png`} alt="Github Icon" />
          <a href="https://github.com/KaziAmin110" target="_blank">Github</a>
        </li>
      </ul>
    </footer>
  );
};
