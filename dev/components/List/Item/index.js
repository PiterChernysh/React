import React, { Component } from "react";
import Form from "../../Fotm";

class Item extends Component {
  constructor(props) {
    super();
    this.state = {
      isShowForm: false,
      item: props.item
    };
    this.handleChange = this.handleChange.bind(this);
    this.cancelEdit = this.cancelEdit.bind(this);
  }
  static getDerivedStateFromProps(props, state) {
    const { news_title, text } = state.item;
    if (props.item.news_title !== news_title || props.item.text !== text) {
      return {
        isShowForm: false
      };
    }
    return null;
  }
  handleChange() {
    const { isShowForm } = this.state;
    this.setState({
      isShowForm: !isShowForm
    });
  }

  cancelEdit(){
    this.setState({
      isShowForm: false
    });
  }
  render() {
    const { item, removeFromList, updateFromList } = this.props;
    const { isShowForm } = this.state;
    return (
      <li className="item">
        {isShowForm ? (
          <Form type="edit" item={item} addFromProps={updateFromList} cancelEdit = {this.cancelEdit}/>
        ) : (
          <>
            <header className="item__head">
              <h3 className="item__title">{item.news_title}</h3>
              <div className="item__action">
                <button
                  className="button button--small"
                  onClick={this.handleChange}
                >
                  edit
                </button>
                <button
                  className="button button--small"
                  onClick={() => removeFromList(item.id)}
                >
                  delete
                </button>
              </div>
            </header>
            <p>{item.text}</p>
          </>
        )}
      </li>
    );
  }
}
Item.defaultProps = {
  author: "noname",
  text: "lorem ipsum"
};
export default Item;
