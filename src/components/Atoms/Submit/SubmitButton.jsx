import styles from "./Submit.module.scss";

const Submit = ({ onClick }) => (
  <button onClick={onClick} className={styles.save}>
    Save
  </button>
);
export default Submit;
