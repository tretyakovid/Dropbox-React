import styles from "./Collaboration.module.css";
import Block from "../Block/Block";

export default function Collaboration() {
  return (
    <div className={styles.collaboration}>
      <div className={styles.wrapper + " " + "wrapper"}>
        <Block
          color="#be4b0a"
          heading="Content collaboration"
          subheading="Work with anyone, from anywhere, on any device"
          description="Dropbox delivers flexible sharing, smart organisation and seamless
        collaboration – even for those without an account – so you and your team
        can get it done, and done right."
        />
        <Block
          color="#78286e"
          heading="Instant, actionable insights"
          subheading="Work with anyone, from anywhere, on any device"
          description="With Dropbox DocSend, page-by-page analytics and permission controls track file use in real time, so you can see when clients, contractors or collaborators have viewed your content."
        />
        <Block
          color="#007891"
          heading="Reduce the chaos"
          subheading="Work with anyone, from anywhere, on any device"
          description="Dropbox Replay reduces ‌feedback back-and-forth. Collect video, image and audio feedback all in one place, so you can get to final delivery in no time."
        />
      </div>
    </div>
  );
}
