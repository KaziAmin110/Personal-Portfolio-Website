import React from "react";

import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
export const Experience = () => {
  return (
    <section id="experience" className={styles.container}>
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
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
        <ul className={styles.history}> 
          {history.map((histItem, id) => {
            return (
              <li key={id} className={styles.historyItem}>
                <img
                  src={"/assets/" + histItem.imageSrc}
                  alt={`${histItem.organization} Logo`}
                />
                <div className={styles.historyItemDetails}>
                  <h3>{`${histItem.role}, ${histItem.organization}`}</h3>
                  <p>{`${histItem.startDate} - ${histItem.endDate}`}</p>
                  <ul>
                    {histItem.experiences.map((experience, id) => {
                      return <li key={id}>{experience}</li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
