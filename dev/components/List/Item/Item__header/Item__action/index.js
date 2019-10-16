import React, { Component } from "react";

class Item__action extends Component {
  render() {
    return (
      <div className="item__action">
        <button className="button button--small">edit</button>
        <button className="button button--small">delete</button>
      </div>
    );
  }
}

export default Item__action;
