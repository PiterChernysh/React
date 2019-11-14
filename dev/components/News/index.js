import React, { useState } from "react";
import Title from "../Title";
import Form from "../Form";
import List from "../List";
import styles from "./style.css";

const News = () => {
  return (
    <div className={styles.box}>
      <Title />
      <Form />
      <List />
    </div>
  );
};

export default News;
