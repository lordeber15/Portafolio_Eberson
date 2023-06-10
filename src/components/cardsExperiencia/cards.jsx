import styles from "./cards.module.css";
export default function cards({ nameProject, location, description }) {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{nameProject}</h2>
      <h4 className={styles.location}>{location}</h4>
      <p className={styles.description}>{description}</p>
    </div>
  );
}
