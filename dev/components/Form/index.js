import React, { useState } from "react";
import Button from "../Button";
import styles from "./style.css";

const Form = ({ item, type, addFromProps, cancelEdit }) => {
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
      addFromProps(data);
      clearForm();
      if (type != "edit") cancelEdit();
    }
  };
  const clearForm = () => {
    setName("");
    setText("");
  };

  return (
    <form
      className={`${styles.form} ${styles.type ? styles.type : ""}`}
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
        {type === "edit" ? (
          <>
            <Button theme='edit'>Add News</Button>
            <Button theme='edit' handleClick={() => cancelEdit}>Cancel</Button>
          </>
        ) : (
          <Button>Add News</Button>
        )}
      </div>
    </form>
  );
};

export default Form;
