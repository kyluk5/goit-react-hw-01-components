import React from "react";
import styles from "./TransactionHistory.module.css";
import Transaction from "../TransactionItem/Transaction";
import PropTypes from "prop-types";

const TransactionHistory = ({ items }) => {
  return (
    <table className={styles["transaction-history"]}>
      <thead>
        <tr className={styles["transaction-head"]}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map((item) => (
          <Transaction
            key={item.id}
            type={item.type}
            amount={item.amount}
            currency={item.currency}
          />
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    })
  ).isRequired,
};
