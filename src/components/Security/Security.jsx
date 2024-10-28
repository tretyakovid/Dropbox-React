import styles from "./Security.module.css";
import Block from "../Block/Block";

export default function Security() {
  return (
    <div className={styles.security}>
      <div className={styles.security__wrapper + " " + "wrapper"}>
        <div className={styles.security__top}>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="dig-PictogramIcon"
            width="64"
            height="64"
            focusable="false"
            role="presentation"
          >
            <path
              d="M15 9V7.25C15 5.768 14.436 4 11.75 4S8.5 5.768 8.5 7.25V9H6v7.75A3.254 3.254 0 0 0 9.25 20h5a3.254 3.254 0 0 0 3.25-3.25V9H15Zm-5-1.75c0-1.292.458-1.75 1.75-1.75s1.75.458 1.75 1.75V9H10V7.25Zm6 9.5a1.75 1.75 0 0 1-1.75 1.75h-5a1.75 1.75 0 0 1-1.75-1.75V10.5H16v6.25Z"
              fill="currentColor"
              vectorEffect="non-scaling-stroke"
            ></path>
            <path
              d="M11 15.366V17h1.5v-1.634a1.603 1.603 0 0 0 1-1.616A1.626 1.626 0 0 0 11.75 12 1.626 1.626 0 0 0 10 13.75a1.603 1.603 0 0 0 1 1.616Z"
              fill="currentColor"
              vectorEffect="non-scaling-stroke"
            ></path>
          </svg>
          <Block
            subheading="Security never comes second"
            description="From industry-leading encryption and tamper-proof documents to
            version history and recovery, Dropbox keeps your intellectual
            property safe and never sells or shares your data."
            borderColor="#fff"
            linkColor="#fff"
            subheadingColor="#fff"
          />
        </div>
        <div className={styles.security__company}>
          <h3 className={styles.security__heading}>
            Trusted by the biggest companies in the world
          </h3>
          {/* <div className={styles.security__creeping_string}>
            <ul className={styles.security__list}>
              <li>
                <img src="/assets/img/wordmark.svg" alt="Wordmark" />
              </li>
              <li>
                <img src="/assets/img/wordmark.svg" alt="Wordmark" />
              </li>
              <li>
                <img src="/assets/img/wordmark.svg" alt="Wordmark" />
              </li>
              <li>
                <img src="/assets/img/wordmark.svg" alt="Wordmark" />
              </li>
              <li>
                <img src="/assets/img/wordmark.svg" alt="Wordmark" />
              </li>
              <li>
                <img src="/assets/img/wordmark.svg" alt="Wordmark" />
              </li>
              <li>
                <img src="/assets/img/wordmark.svg" alt="Wordmark" />
              </li>
              <li>
                <img src="/assets/img/wordmark.svg" alt="Wordmark" />
              </li>
              <li>
                <img src="/assets/img/wordmark.svg" alt="Wordmark" />
              </li>
            </ul>
          </div> */}
        </div>
      </div>
    </div>
  );
}
