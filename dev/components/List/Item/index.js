import React from "react";
import styles from "./style.css";
import { NavLink } from "react-router-dom";

const Item = props => {
  const { item } = props;
  return (
    <div className={styles.item}>
      <NavLink
                activeStyle={{
                  color: "red"
                }}
                exact
                to={`/news/${item.id}`}
              >
                {item.title}
              </NavLink>
        <div className={styles.item__action}></div>
    </div>
  );
};

export default Item;
