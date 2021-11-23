import React from "react";
import PropTypes from "prop-types";
import User from "../../../assets/user.png";
import styles from "./Card.module.scss";

const Card = ({ task, assignee, onClick }) => {
  return (
    <div
      className={styles.card}
      onClick={onClick}
      onKeyUp={({ keyCode }) => {
        if (keyCode === 13 || keyCode === 32) onClick();
      }}
      tabIndex={0}
      aria-label={`${task.title}. Click to view task details.`}
      role="button"
    >
      <section className={styles.title}>{task.title}</section>
      <section className={styles.info}>
        <div className={styles.priority}>{task.priority}</div>
        <div className={styles.avatar}>
          <div className={styles.id}>{task.id}</div>
          <div className={styles.img}>
            <img src={User} title={assignee} alt="User" />
          </div>
        </div>
      </section>
    </div>
  );
};

Card.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    assignee: PropTypes.string.isRequired,
    priority: PropTypes.string.isRequired,
    created_at: PropTypes.number.isRequired,
    updated_at: PropTypes.number.isRequired,
  }),
  assignee: PropTypes.string,
  onClick: PropTypes.func,
};

export default Card;
