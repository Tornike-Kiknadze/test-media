import styles from "./styles/wrapper.module.css";

const Wrapper = (props) => {
  return <div className={styles.container}>{props.children}</div>;
};

export default Wrapper;
