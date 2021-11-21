import React from "react";
import PropTypes from "prop-types";
import User from "../../assets/user.png";
import styles from "./Card.module.scss";

const Card = ({ id, title, priority, assignee }) => {
  return (
    <div className={styles.card}>
      <section className={styles.title}>{title}</section>
      <section className={styles.info}>
        <div className={styles.priority}>{priority}</div>
        <div className={styles.avatar}>
          <div className={styles.id}>{id}</div>
          <div className={styles.img}>
            {<img src={User} title={assignee} alt="User" />}
          </div>
        </div>
      </section>
    </div>
  );
};

Card.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  priority: PropTypes.string.isRequired,
  assignee: PropTypes.string.isRequired,
};

export default Card;
