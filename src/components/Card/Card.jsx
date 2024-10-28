import styles from "./Card.module.css";

export default function Card(props) {
  return (
    <div className={styles.card}>
      <img src="/assets/img/construction.webp" alt="Construction" />
      <div className={styles.content}>
        <div className={styles.text}>
          <h3 className={styles.heading}>{props.heading}</h3>
          <p className={styles.description}>{props.description}</p>
        </div>
        <a href="#">Learn more</a>
      </div>
    </div>
  );
}
