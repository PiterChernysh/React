import React, { useState } from "react";

import Title from "../Title";
import Form from "../Form";
import List from "../List";
import styles from "./style.css";

const News = () => {
  const [isShowForm, setIsShowForm] = useState(false);
  const cancelEdit = () => {
    setIsShowForm(false);
  };
  return (
    <div className={styles.box}>
      <Title />
      <Form cancelEdit={cancelEdit}/>
      <List />
    </div>
  );
};

export default News;
