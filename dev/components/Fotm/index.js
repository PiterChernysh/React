import React, { useState } from "react";

const Form = ({ item, type, addFromProps, cancelEdit }) => {
  const [name, nameChange] = useState(item ? item.news_title : "");
  const [text, textChange] = useState(item ? item.text : "");
  const handleChange = e => {
    const { name, value } = e.target;
    if (name === "name") {
      nameChange(value);
    } else {
      textChange(value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const data = {
      id: item ? item.id : Date.now(),
      news_title: name,
      text: text
    };
    if (name != "" && text != "") {
      addFromProps(data);
      clearForm();
      if (type != "edit") cancelEdit();
    }
  };
  const clearForm = () => {
    nameChange("");
    textChange("");
  };

  return (
    <form className={`form ${type ? type : ""}`} onSubmit={handleSubmit}>
      <label htmlFor="name">Name news </label>
      <small>{name != "" ? <br /> : "No name news"}</small>
      <input
        type="text"
        id="name"
        name="name"
        value={name}
        onChange={handleChange}
      />
      <label htmlFor="text">Text news</label>
      <small>{text != "" ? <br /> : "No news"}</small>
      <textarea
        type="text"
        name="text"
        id="text"
        value={text}
        onChange={handleChange}
      ></textarea>
      <div className="novigation">
        <button className="button">Add News</button>
        {type === "edit" ? (
          <button className="button" onClick={cancelEdit}>
            Cancel
          </button>
        ) : (
          ""
        )}
      </div>
    </form>
  );
};

export default Form;
