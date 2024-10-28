import React from "react";
import styled from "styled-components";
import styles from "./Block.module.css";

export default function Block(props) {
  const headingStyle = {
    backgroundColor: props.color,
  };
  const linkStyle = {
    borderColor: props.borderColor,
    color: props.linkColor,
  };
  const subheadingStyle = {
    color: props.subheadingColor,
  };
  const descStyle = {
    color: props.descColor,
  };
  return (
    <div className={styles.block}>
      <h2 style={headingStyle} className={styles.heading}>
        {props.heading}
      </h2>
      <p className={styles.subheading} style={subheadingStyle}>
        {props.subheading}
      </p>
      <p className={styles.description} style={descStyle}>
        {props.description}
      </p>
      <div className={styles.links}>
        <a href="#" style={linkStyle} className={styles.started_link}>
          Get started free
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
        <a href="#" style={linkStyle} className={styles.learn_link}>
          <span style={{ borderColor: linkStyle.borderColor }}>Learn more</span>
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
    </div>
  );
}
