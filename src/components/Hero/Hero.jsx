import React from "react";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Kazi</h1>
        <p className={styles.description}>
          I'm a full-stack developer with over 2 years of experience using React
          and NodeJS. Reach out if you would like to learn more!
        </p>
        <a href="mailto:kaziamin1239@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <div className={styles.imgContainer}>
        <img
          src="/assets/hero/heroImage.png"
          alt="Hero image of me"
          className={styles.heroImg}
        />
      </div>

      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
