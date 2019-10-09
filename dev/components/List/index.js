import React, { Component } from "react";
import Item from "./Item";

class List extends Component {
  render() {
    return (
      <ul class="list">
        <Item nameTitle={"Николай"} comment={"олололололололо"} />
        <Item nameTitle={"Юрий"} comment={"Всем привет"} />
      </ul>
    );
  }
}

export default List;
