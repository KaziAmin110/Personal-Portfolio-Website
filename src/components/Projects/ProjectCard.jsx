import React from "react";

import styles from "./ProjectCard.module.css";

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source },
  id,
}) => {
  return (
    <div key={id} className={styles.container}>
      {imageSrc.endsWith(".mp4") ? (
        <video
          autoPlay
          loop
          muted
          playsInline
          className={styles.image}
          src={imageSrc}
          typeof="video/mp4"
          alt={`Image of ${title}`}
        />
      ) : (
        <img
          src={imageSrc}
          alt={`Image of ${title}`}
          className={styles.image}
        />
      )}
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => {
          return (
            <li key={id} className={styles.skill}>
              {skill}
            </li>
          );
        })}
      </ul>
      <div className={styles.links}>
        <a href={source} className={styles.link} target="_blank">
          Source
        </a>
      </div>
    </div>
  );
};
