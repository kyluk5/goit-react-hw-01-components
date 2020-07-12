import React from "react";
import PropTypes from "prop-types";
import styles from "../Statistics/Statistics.module.css";
import StatisticsItem from "../StatisticsItem/StatisticsItem";

const Statistics = ({ title, stats }) => {
  return (
    <section className={styles.statistics}>
      {!undefined && <h2 className={styles.title}>{title}</h2>}
      <ul className={styles["stat-list"]}>
        {stats.map((item) => (
          <StatisticsItem
            key={item.id}
            label={item.label}
            percentage={item.percentage}
          />
        ))}
      </ul>
    </section>
  );
};

export default Statistics;

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ).isRequired,
};

Statistics.defaultProps = {
  title: "Upload stats",
};
