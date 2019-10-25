import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super();
    this.state = {
      name: props.item ? props.item.news_title : "",
      text: props.item ? props.item.text : ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    const { name, text } = this.state;
    const { item } = this.props;

    const data = {
      id: item ? item.id : Date.now(),
      news_title: name,
      text: text
    };
    if (name != "" && text != "") {
      this.props.addFromProps(data);
      this.clearForm();
    }
  }
  clearForm() {
    this.setState({
      name: "",
      text: ""
    });
  }
  render() {
    const { name, text } = this.state;
    const { type, cancelEdit } = this.props;
    
    return (
      <form className={`form ${type ? type : ""}`} onSubmit={this.handleSubmit}>
        <label htmlFor="name">Name news </label>
        <small>{name != "" ? <br /> : "No name news"}</small>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={this.handleChange}
        />
        <label htmlFor="text">Text news</label>
        <small>{text != "" ? <br /> : "No news"}</small>
        <textarea
          name="text"
          id="text"
          value={text}
          onChange={this.handleChange}
        ></textarea>
        <div className = "novigation">
        <button className="button">Add News</button>
        <button className="button" onClick = {cancelEdit}>Cancel</button>
        </div>
        
      </form>
    );
  }
}

export default Form;
