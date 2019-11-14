import React from "react";
import ReactDOM from "react-dom";
import styles from "./style.css";
import News from "./components/News";
import store from "./store";

const App = () => {
  return (
    <div className={styles.box}>
      <News />
    </div>
  );
};

const render = () => {
  ReactDOM.render(<App />, document.getElementById("app"));
};
render();
store.subscribe(render);