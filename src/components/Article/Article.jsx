import styles from "./Arcticle.module.css";

export default function Article(props) {
  return (
    <div className={styles.article + " " + "article"}>
      <a href="#" className={styles.link}>
        <img src="/assets/img/cLaren.webp" alt="McLaren" />
        <div className={styles.content}>
          <div className={styles.information}>
            <p className={styles.type}>Article</p>
            <h3 className={styles.heading}>{props.heading}</h3>
            <p className={styles.description}>{props.description}</p>
          </div>
          <p className={styles.subtext}>Read article</p>
        </div>
      </a>
    </div>
  );
}
