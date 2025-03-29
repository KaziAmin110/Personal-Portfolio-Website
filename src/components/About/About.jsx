import React from "react";
import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About Me</h2>
      <div className={styles.content}>
        <img
          src="assets/about/computerIcon.png"
          alt="Me Sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src="assets/about/cursorIcon.png" alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I have experience building responsive designs and optimized
                client side code.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src="assets/about/serverIcon.png" alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I have experience developing fast and optimised backend services
                and working with both relational and non-relational databases.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img
              src="assets/about/dataIcon.png"
              alt="UI icon"
              className={styles.dataImage}
            />
            <div className={styles.aboutItemText}>
              <h3>Data Analyst</h3>
              <p>
                I have experience using Data as a means of coming up with
                meaningful business insights.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
