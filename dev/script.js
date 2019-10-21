import React, { Component } from "react";
import ReactDOM from "react-dom";

import News from "./components/News";

class App extends Component {
  render() {
    return (
      <>
        <div className="box">
          <News />
        </div>
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
