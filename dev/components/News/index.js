import React from "react";
import {Provider} from 'react-redux';
import Title from "../Title";
import Form from "../Form";
import List from "../List";
import styles from "./style.css";
import store from '../../store';

const News = () => {
  return (
    <Provider store={store}>
    <div className={styles.box}>
      <Title />
      <Form />
      <List />
    </div>
    </Provider>
  );
};

export default News;
