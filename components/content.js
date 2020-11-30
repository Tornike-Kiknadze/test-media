import styles from "../components/styles/content.module.css";
import Navbar from "./navbar";

const Content = (props) => {
  return <div className={styles.content}>{props.children}</div>;
};

export default Content;
