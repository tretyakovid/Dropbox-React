import styles from "./Spheres.module.css";
import Card from "../Card/Card";

export default function Spheres() {
  const cards = [
    {
      id: 0,
      heading: "Construction",
      description:
        "With Dropbox for teams, you can store, access, preview, edit and transfer CAD, BIM, PDF and visual content files from anywhere.",
    },
    {
      id: 1,
      heading: "Media",
      description:
        "Create a flexible media workspace that connects your teams, content and tools together.",
    },
    {
      id: 2,
      heading: "Technology",
      description:
        "From product ideation to development, streamline technology workflows so you can focus on turning great ideas into products people love.",
    },
    {
      id: 3,
      heading: "Professional services",
      description:
        "Make clients happier with easy collaboration, boosted productivity and one organised place to get things done.",
    },
    {
      id: 4,
      heading: "Manufacturing",
      description:
        "Design and engineering teams collaborate easily, managing complex reviews and sharing large files seamlessly.",
    },
    {
      id: 5,
      heading: "Education",
      description:
        "Power student learning, faculty research and staff operations on Dropbox Education’s secure cloud collaboration platform.",
    },
  ];
  return (
    <div className={styles.spheres}>
      <div className={styles.wrapper + " " + "wrapper"}>
        <h2 className={styles.heading}>Dropbox empowers across industries</h2>
        <div className={styles.cards}>
          {cards.map((card) => {
            return <Card key={card.id + 1} {...card} />;
          })}
        </div>
      </div>
    </div>
  );
}
