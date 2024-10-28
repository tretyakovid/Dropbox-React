import styles from "./Matherial.module.css";
import Article from "../Article/Article";

export default function Matherial() {
  const articles = [
    {
      id: 0,
      heading:
        "Study: here’s how many hours we lose to distraction – and how to get our focus back",
      description:
        "For our study, Economist Impact included knowledge workers globally, and found that, no matter where people work, there’s a significant cost to lost focus around the world.",
    },
    {
      id: 1,
      heading:
        "Dropbox teams up with McLaren Racing as an Official Technology Partner of McLaren Formula 1 Team",
      description:
        "Dropbox brings simplified sharing, collaboration and organisation to the McLaren Formula 1 Team.",
    },
    {
      id: 2,
      heading: "The best way to share photos with family and friends",
      description:
        "Don’t lose precious photos. Save them and share them with loved ones – for free. Here’s an easy-to-follow guide to sharing and storing photos with Dropbox.",
    },
    {
      id: 3,
      heading: "The best way to share photos with family and friends",
      description:
        "Don’t lose precious photos. Save them and share them with loved ones – for free. Here’s an easy-to-follow guide to sharing and storing photos with Dropbox.",
    },
    {
      id: 4,
      heading: "The best way to share photos with family and friends",
      description:
        "Don’t lose precious photos. Save them and share them with loved ones – for free. Here’s an easy-to-follow guide to sharing and storing photos with Dropbox.",
    },
    {
      id: 5,
      heading: "The best way to share photos with family and friends",
      description:
        "Don’t lose precious photos. Save them and share them with loved ones – for free. Here’s an easy-to-follow guide to sharing and storing photos with Dropbox.",
    },
  ];
  return (
    <div className={styles.matherial}>
      <div className="wrapper">
        <h2 className={styles.list_heading}>
          Discover, learn, thrive with Dropbox
        </h2>
        <div className={styles.articles}>
          {articles.map((art) => {
            if (art.id < 3) {
              return <Article key={art.id} {...art} />;
            }
          })}
        </div>
        <a href="#" className={styles.view_link}>
          View more resources
        </a>
      </div>
    </div>
  );
}
