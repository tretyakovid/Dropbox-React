import styles from "./InformationCard.module.css";

export default function InformationCard(props) {
  return (
    <div className={styles.card}>
      <img src="/assets/img/BrianThumb.webp" alt="BrianThumb" />
      <div className={styles.content}>
        <span className={styles.content_type}>{props.content_type}</span>
        <h3 className={styles.heading}>“{props.heading}”</h3>
        <p className={styles.description}>{props.description}</p>
        <a href="#" className={styles.watch_link}>
          Watch {props.content_type}
        </a>
      </div>
    </div>
  );
}
