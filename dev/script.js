import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import News from "./components/News";

const App = () => {
  return (
    <div className="box">
      <News />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
