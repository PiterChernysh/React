import React, { useState } from "react";
import Button from "../Button";
import styles from "./style.css";
import { createNews, updateNews } from "../../actions";

const Form = ({ item, type }) => {
  const [text, setText] = useState(item ? item.text : "");
  const [name, setName] = useState(item ? item.news_title : "");

  const handleChange = e => {
    const { name, value } = e.target;
    if (name === "name") {
      setName(value);
    } else {
      setText(value);
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
      type === "edit" ? updateNews(data) : createNews(data);
      clearForm();
    }
  };

  const clearForm = () => {
    setName("");
    setText("");
  };

  return (
    <form
      className={`${styles.form}  ${styles.type ? styles.type : ""}`}
      onSubmit={handleSubmit}
    >
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
      <div className={styles.novigation}>
        {type == "edit" ? (
          <Button theme="edit">Update News</Button>
        ) : (
          <Button>Add News</Button>
        )}
      </div>
    </form>
  );
};

export default Form;
