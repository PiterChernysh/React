import React, { Component } from "react";
import Item__head from "./Item__header";

class Item extends Component {
  render() {
  const {author, text} = this.props;

    return (
      <li className="item">
        <Item__head author={author} />
        <p> {text} </p>
      </li>
    );
  }
}

export default Item;
