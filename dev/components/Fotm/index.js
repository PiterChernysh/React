import React, { Component } from "react";

class Form extends Component {
  render() {
    return (
      <form className="form">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" />
        <label htmlFor="text">Comment</label>
        <textarea name="text" id="text"></textarea>
        <button className="button">post</button>
      </form>
    );
  }
}

export default Form;
