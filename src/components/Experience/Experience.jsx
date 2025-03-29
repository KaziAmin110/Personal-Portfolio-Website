import React from "react";

import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
export const Experience = () => {
  return (
    <section id="experience" className={styles.container}>
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <ul className={styles.history}>
          {history.map((histItem, id) => {
            return (
              <li key={id} className={styles.historyItem}>
                <h3
                  className={styles.histTitle}
                >{`${histItem.role} @ ${histItem.organization}`}</h3>
                <p
                  className={styles.histTime}
                >{`${histItem.startDate} - ${histItem.endDate}`}</p>
                <div className={styles.histFields}>
                  <div className={styles.historyItemDetails}>
                    <ul>
                      {histItem.experiences.map((experience, id) => {
                        return <li key={id}>{experience}</li>;
                      })}
                    </ul>
                  </div>
                  <img
                    src={"/assets/" + histItem.imageSrc}
                    alt={`${histItem.organization} Logo`}
                    className={styles.ucfLogo}
                  />
                </div>
              </li>
            );
          })}
        </ul>
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={"/assets/" + skill.imageSrc} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
