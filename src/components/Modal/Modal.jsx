import styles from "./Modal.module.css";

export default function Modal({ active, setActive }) {
  return (
    <div
      onClick={() => setActive(false)}
      className={styles.overlay + " " + (active ? styles.overlay_active : "")}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={styles.modal + " " + (active ? styles.modal_active : "")}
      >
        <button onClick={() => setActive(false)} className={styles.close_btn}>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="dig-UIIcon dig-UIIcon--standard"
            width="24"
            height="24"
            role="presentation"
            focusable="false"
          >
            <path
              d="m17.5 6.5-11 11m11 0-11-11"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              vectorEffect="non-scaling-stroke"
            ></path>
          </svg>
        </button>
        <p>Choose language:</p>
        <ul className={styles.list}>
          <li>
            <a href="/eng">English</a>
          </li>
          <li>
            <a href="/eng">English</a>
          </li>
          <li>
            <a href="/eng">English</a>
          </li>
          <li>
            <a href="/eng">English</a>
          </li>
          <li>
            <a href="/eng">English</a>
          </li>
          <li>
            <a href="/eng">English</a>
          </li>
          <li>
            <a href="/eng">English</a>
          </li>
          <li>
            <a href="/eng">English</a>
          </li>
          <li>
            <a href="/eng">English</a>
          </li>
          <li>
            <a href="/eng">English</a>
          </li>
          <li>
            <a href="/eng">English</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
