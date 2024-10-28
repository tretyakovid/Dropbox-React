import { useRef } from "react";
import styles from "./AboutUs.module.css";

export default function AboutUS() {
  const aboutRef = useRef(null);
  const contentRef = useRef(null);
  return (
    <div className={styles.about}>
      <div className="wrapper" ref={aboutRef}>
        <div className={styles.content} ref={contentRef}>
          With Dropbox, you can
          <span
            className={styles.content_collaborate}
            style={{ color: "#9b6400" }}
          >
            &nbsp;edit and sign&nbsp;
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
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.852 8.937v7.523l-2.438 3.6-2.439-3.6V6.147c0-.59.248-1.147.678-1.552.428-.403.998-.62 1.582-.62h.353a2.267 2.267 0 0 1 1.589.623c.428.404.675.96.675 1.549v1.29h3.288v4.582h-1.5V8.937H8.852Zm-2.25-3.462a.767.767 0 0 1 .539.207l.005.005a.63.63 0 0 1 .206.46v1.29H5.475v-1.29a.63.63 0 0 1 .206-.46.808.808 0 0 1 .554-.212h.367ZM5.475 8.937V16l.939 1.385L7.352 16V8.937H5.475Zm9.618 6.613c-.213.074-.528.248-.94.549-.475.347-.997.802-1.52 1.289-.449.418-.886.848-1.284 1.24l-.188.184c-.43.423-.836.817-1.122 1.043l-.93-1.178c.209-.164.547-.49 1.002-.936l.184-.181c.398-.391.85-.836 1.316-1.27a18.965 18.965 0 0 1 1.656-1.402c.522-.381 1.111-.74 1.67-.845l.012-.002.012-.002c.34-.053.724-.025 1.054.203.331.228.476.566.535.85.109.526-.012 1.163-.142 1.673-.097.379-.22.768-.337 1.114a20.88 20.88 0 0 0 1.056-.684l.066-.045.11-.073a1.302 1.302 0 0 1 .883-.214c.328.048.553.239.69.435a1.6 1.6 0 0 1 .21.469c.02.066.045.167.064.245l.024.091a.968.968 0 0 0 .087.244.6.6 0 0 0 .206-.004l1.302-.358.398 1.447-1.381.38-.039.006c-.575.095-1.098.003-1.491-.355-.305-.278-.436-.639-.506-.88l-.045.03c-.266.178-.618.409-.974.619-.342.202-.736.414-1.072.527-.15.05-.397.12-.655.085a.912.912 0 0 1-.511-.241.895.895 0 0 1-.27-.555 1.21 1.21 0 0 1 .022-.357 3.1 3.1 0 0 1 .067-.268c.05-.176.122-.387.196-.603l.027-.08c.145-.427.306-.899.42-1.346.096-.378.137-.66.138-.843Zm4.15 2.79s.005 0 .012.005c-.01-.003-.012-.006-.012-.006Z"
                fill="currentColor"
                vectorEffect="non-scaling-stroke"
              ></path>
            </svg>
          </span>
          your documents,
          <span
            className={styles.content_collaborate}
            style={{ color: "#0f503C" }}
          >
            &nbsp;collaborate&nbsp;
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
                d="m12.25 9.085-2.925 3.119-1.822-1.656 1.009-1.11.729.662 1.915-2.041 1.094 1.026Z"
                fill="currentColor"
                vectorEffect="non-scaling-stroke"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.25 7.428c0-.927.751-1.678 1.678-1.678h7.898c.927 0 1.678.751 1.678 1.678v1.12h2.93c.927 0 1.678.75 1.678 1.677v5.145c0 .926-.75 1.677-1.677 1.677h-.149v1.842l-3.404-1.842h-4.346a1.677 1.677 0 0 1-1.677-1.678v-.783l-2.783 1.506V14.25h-.148a1.678 1.678 0 0 1-1.678-1.678V7.428Zm6.109 6.822v1.12c0 .098.08.177.177.177h4.726l1.524.825v-.825h1.649c.098 0 .177-.08.177-.178v-5.144a.177.177 0 0 0-.177-.178h-2.931v2.525c0 .927-.751 1.678-1.678 1.678H10.36Zm-2.783-.675L9.1 12.75h4.726c.098 0 .178-.08.178-.178V7.428a.178.178 0 0 0-.178-.178H5.928a.178.178 0 0 0-.178.178v5.144c0 .099.08.178.178.178h1.648v.825Z"
                fill="currentColor"
                vectorEffect="non-scaling-stroke"
              ></path>
            </svg>
          </span>
          on projects and
          <span className={styles.content_search} style={{ color: "#78286E" }}>
            &nbsp;search&nbsp;
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
                d="m19.03 17.97-4.009-4.01A5.89 5.89 0 0 0 16 10.5C16 7.056 13.944 5 10.5 5S5 7.056 5 10.5 7.056 16 10.5 16a5.89 5.89 0 0 0 3.461-.979l4.009 4.01 1.06-1.061ZM6.5 10.5c0-2.617 1.383-4 4-4s4 1.383 4 4-1.383 4-4 4-4-1.383-4-4Z"
                fill="currentColor"
                vectorEffect="non-scaling-stroke"
              ></path>
            </svg>
          </span>
          across all your apps, and it happens in the same place you
          <span
            className={styles.content_securely}
            style={{ color: "#CD2F7B" }}
          >
            &nbsp;securely store&nbsp;
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
          </span>
          all your content. It’s that simple :)
        </div>
      </div>
    </div>
  );
}
