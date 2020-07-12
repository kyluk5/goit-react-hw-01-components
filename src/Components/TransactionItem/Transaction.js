import React from "react";
import styles from "../TransactionItem/Transaction.module.css";
import PropTypes from "prop-types";

const Transaction = ({ type, amount, currency }) => {
  return (
    <tr className={styles["transaction-item"]}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
};

export default Transaction;

Transaction.propTypes = {
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,
};
