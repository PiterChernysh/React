import React, { Component } from "react";
import Item__head from "./Item__header";

class Item extends Component {
  render() {
    return (
      <li class="item">
        <Item__head nameTitle={this.props.nameTitle} />
        <p> {this.props.comment} </p>
      </li>
    );
  }
}

export default Item;
