import React, { Component } from "react";
import Item__action from "./Item_action";

class Item__head extends Component {
  render() {
    return (
      <header class="item__head">
        <h3 class="item_title"> {this.props.nameTitle}</h3>
        <Item__action />
      </header>
    );
  }
}

export default Item__head;
