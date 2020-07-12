import React from "react";
import styles from "../StatisticsItem/StatisticsItem.module.css";

const StatisticsItem = ({ id, label, percentage }) => {
  function generateColor() {
    return (
      "#" +
      (Math.random().toString(16) + "000000").substring(2, 8).toUpperCase()
    );
  }
  const backgroundColor = {
    backgroundColor: generateColor(),
  };
  return (
    <li className={styles.item} id={id} style={backgroundColor}>
      <span className={styles.label}>{label}</span>
      <span className={styles.percentage}>{percentage}%</span>
    </li>
  );
};

export default StatisticsItem;
