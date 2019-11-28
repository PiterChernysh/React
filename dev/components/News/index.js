import React from "react";
import Title from "../Title";
import List from "../List";
import styles from "./style.css";

const News = () => {
  return (
    <div className={styles.box}>
      <Title />
      <List />
    </div>
  );
};

export default News;
