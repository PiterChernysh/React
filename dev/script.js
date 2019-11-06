import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import styles from "./style.css";
import News from "./components/News";

const App = () => {
  return (
    <div className={styles.box}>
      <News />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
