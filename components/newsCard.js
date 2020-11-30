import styles from "../components/styles/newscard.module.css";
import Navbar from "./navbar";
import Image from "next/image";

const NewsCard = (props) => {
  return (
    <div className={styles.newsCard}>
      <div
        className={styles.newsCardImage}
        style={{ backgroundImage: `url(/assets/${props.image}.jpg)` }}
      ></div>
      <div className={styles.newsCardText}>
        <p>{props.title}</p>
        <p>{props.date}</p>
        <p>{props.text}</p>
      </div>
    </div>
  );
};

export default NewsCard;
