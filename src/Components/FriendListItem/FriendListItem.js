import React from "react";
import styles from "../FriendListItem/FriendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline, id }) => {
  return (
    <li className={styles.item} key={id}>
      <span className={isOnline ? styles.activ : styles.disactive}></span>
      <img className={styles.avatar} src={avatar} alt={name} width="98" />
      <p className={styles.name}>{name}</p>
    </li>
  );
};

export default FriendListItem;
