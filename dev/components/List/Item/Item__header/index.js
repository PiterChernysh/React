import React, { Component } from "react";
import Item__action from "./Item__action";

class Item__head extends Component {
  render() {
    return (
      <header class="item__head">
        <h3 class="item__title"> {this.props.nameTitle}</h3>
        <Item__action />
      </header>
    );
  }
}

export default Item__head;
