import React, { Component } from "react";
import ReactDOM from "react-dom";

import Title from "./components/Title";
import Form from "./components/Fotm";
import List from "./components/List";

class App extends Component {
  render() {
    return (
      <div className="box">
        <Title />
        <Form />
        <List />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
