import { useRef, useEffect } from "react";
import styles from "./Main.module.css";

export default function Main() {
  const mainContentRef = useRef(null);
  const textBlockRef = useRef(null);
  const mainRef = useRef(null);
  let lastScrollTop = 0;
  let value = 1;

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const top = window.scrollY;
      const scrollValue = 0.02;
      if (mainContentRef.current && mainRef.current && textBlockRef.current) {
        if (top == 0) {
          value = 1;
        } else if (top > 1000) {
          value = 0;
        }
        if (lastScrollTop > top) {
          // console.log("top");
          if (value >= 0 && value + scrollValue <= 1) {
            value += scrollValue;
          } else {
            value = 1;
          }
          mainContentRef.current.style.scale = value;
          mainContentRef.current.style.opacity = value;
          mainRef.current.style.opacity = value;
        } else if (lastScrollTop < top) {
          // console.log("down");
          if (value >= 0 && value - scrollValue >= 0) {
            value -= scrollValue;
          }
          mainContentRef.current.style.scale = value;
          mainContentRef.current.style.opacity = value;
          mainRef.current.style.opacity = value;
        }
      }
      lastScrollTop = top;
    });
  }, []);
  return (
    <div className={styles.main} ref={mainRef}>
      <div className={styles.content} ref={mainContentRef}>
        <div className={styles.text_block} ref={textBlockRef}>
          <h1 className={styles.heading}>Get to work, with a lot less work</h1>
          <p className={styles.subheading}>
            Dropbox delivers tools that help you move your work forward faster,
            keep it safe, and let you collaborate with ease.
          </p>
          <a href="#" className={styles.link_begin}>
            <span>Begin</span>
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
                d="M5 11.75h12m-5.25-6.5 6.25 6.5-6.25 6.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                vectorEffect="non-scaling-stroke"
              ></path>
            </svg>
          </a>
        </div>
        <div className="wrapper">
          <div className={styles.img_block}>
            <img
              className={styles.mobile}
              src="/assets/img/mobile.webp"
              alt="mobile"
            />
            <img
              className={styles.desktop}
              src="/assets/img/desktop.webp"
              alt="desktop"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
