import React, { Component } from "react";
import Item__action from "./Item__action";

class Item__head extends Component {
  render() {
    const {author} = this.props;
    return (
      <header className="item__head">
        <h3 className="item__title"> {author}</h3>
        <Item__action />
      </header>
    );
  }
}

export default Item__head;
