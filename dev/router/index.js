import React from "react";
import News from "../components/News";
import Task from "../components/Task";
import Error from "../components/Error";
import styles from "./style.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { HashRouter as Router, Route, NavLink, Switch } from "react-router-dom";

const Rout = () => {
  return (
    <div className={styles.box}>
      <Router>
        <Header rout={{ Task: "/", News: "/news" }} />
        <Switch>
          <Route path="/news" component={News} />
          <Route path="/" exact component={Task} />
          <Route path="*" component={Error} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};
export default Rout;
